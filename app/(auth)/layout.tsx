// import { isAuthenticated } from '@/lib/action.ts/auth.actions';
import { redirect } from 'next/navigation'
import React, { ReactNode } from 'react'

const Authlayout =async ({children}:{children:ReactNode}) => {
  //  const isUserAuthenticated =await isAuthenticated();
  
  //   if(!isUserAuthenticated) redirect('/sign-in')
  return (
    <div className='auth-layout'>
        {children}</div>
  )
}

export default Authlayout