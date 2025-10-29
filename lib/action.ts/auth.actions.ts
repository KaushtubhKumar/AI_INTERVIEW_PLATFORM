'use server'

import { auth, db } from "@/Firebase/admin";
// import { UserRecord } from "firebase-admin/auth";
import { cookies } from "next/headers";
// import { success } from "zod";
// import { tr } from "zod/v4/locales";

const ONE_WEEK=60*60*24*7

export async function signUp(params:SignUpParams) {
 
    const {uid,name,email}=params;

    try {
        const userRecord= await db.collection('users').doc(uid).get()

        if(userRecord.exists){
            return{
                success:false,
                message:"User already exists"
            }
        }

        await db.collection('users').doc(uid).set({
            name,email
        })

        return{
            success:true,
            message:"You Have Successfully created the account"
        }
    
    } catch (e:any) {
        console.error("error creating User",e)

        if(e.code==="auth/email-already-exists"){
            return {
                success:false,
                message:"This email is already in use"
            }
        }
        return{
            success:false,
            message:"failed to create account"
        }
    }

}


export async function setSessionCookie(idToken:string) {
    
    const cookieStore= await cookies();

    const sessionCookie= await auth.createSessionCookie(
        idToken,{
            expiresIn:ONE_WEEK*1000
        }
    )
    cookieStore.set('session',sessionCookie,{
        maxAge: ONE_WEEK,
        httpOnly:true,
        secure:process.env.NODE_ENV === 'production',
        path:"/",
        sameSite:'lax'
    })
}

export async function signIn(params:SignInParams) {
    
    const {email,idToken}= params;

    try {

        const userRecord=await auth.getUserByEmail(email)

        if(!userRecord){
            return{
                success:false,
                message:"user doesnt exist create account jldi"
            }
        }
        
        await setSessionCookie(idToken);

    } catch (error) {
        console.log(error);
    }
}

export async function getCurrentUser(): Promise<User | null>{
    const cookieStore=await cookies();

    const sessionCookie=cookieStore.get('session')?.value

    if(!sessionCookie) return null;

    try {
        const decodedClaims= await auth.verifySessionCookie(
            sessionCookie,true
        )

        const userRecord=await db.collection('users')
        .doc(decodedClaims.uid)
        .get()

        if(!userRecord.exists) return null;

        return{
            ...userRecord.data(),
            id:userRecord.id,
        }as User

    } catch (error) {
        console.error(error);
    }
}

export async function isAuthenticated() {
    const user=await getCurrentUser();

    return !!user;
    
}