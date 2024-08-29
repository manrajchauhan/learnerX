import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (

    <div className="relative flex overflow-hidden z-0 flex-col justify-center pt-28 pb-20 w-full text-neutral-900 font-medium  max-md:pt-24 max-md:max-w-full">
      <div className="flex flex-col justify-center w-full max-md:max-w-full">
        <div className=" text-8xl font-medium leading-[103px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
      <h1>Empower Your Future with LearnerX</h1>
      <h1 className='mt-2 text-[20px]'>Join Thousands of Learners and Master New Skills Anytime, Anywhere</h1>
        </div>
        <Link href={'/courses'} className='mt-12 gap-2 self-start px-4 py-2 text-base font-semibold leading-relaxed text-center bg-black rounded-[14px] text-white hover:bg-neutral-100 hover:text-neutral-900'>
        <div className="courses-btn">
        Explore Courses
        </div>
        </Link>
      </div>
{/* <div className='hero-image'>
  <Image
  className='absolute bottom-0 right-0 z-[-2]'
  src='/hero-3.svg'
  width={400}
  height={400}
  alt='hero'
  />
</div> */}
    </div>

  )
}
