import InterviewCard from '@/components/InterviewCard'
import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Homepage() {
  return (
    <>
    <div>
       <section className='card-cta'>
        <div className='flex flex-col gap-6 max-w-lg'>
          <h2> Get Interview Ready with AI-Powered Feedback</h2>
          <p className='text-lg'>
            Pratice on real interviews & get instant feedbacks
          </p>
          <Button asChild className='btn-primary max-sm:w-full'>
            
            <Link href="/interview">START AN INTERVIEW</Link>
          </Button>
        </div>

        <Image src="/robot.png" alt='robot-dude' width={400}
        height={400} className='max-sm:hidden'/>
       </section>

       <section className='flex flex-col gap-6 mt-8'>

        <h2>Your Interviews</h2>

        <div className='interviews-section'>
          {dummyInterviews.map((interview)=>(
              <InterviewCard {...interview} key={interview.id} />
          ))}
          {/* <p>You havent taken any interviews</p> */}
        </div>
       </section>

       <section className='flex flex-col gap-6 mt-8'>
        <h2> Take an Interview</h2>

        <div className='interviews-section'>
          {dummyInterviews.map((interview)=>(
              <InterviewCard {...interview} key={interview.id} />
          ))}
          </div>
       </section>
    </div>

    </>
  )
}

export default Homepage