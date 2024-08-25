import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className="flex flex-wrap flex-1 shrink gap-10 items-center self-stretch py-4 my-auto w-full border-b-2     border-solid basis-0 border-b-neutral-900 min-w-[240px] max-md:max-w-full">
            <div className="max-w-full w-[158px]">
              <Link href={'/'}>
                <Image
                src="/logo.svg"
                alt='brand logo'
                width={203}
                height={38.93}
                />
              </Link>
            </div>
          <div className="flex flex-wrap flex-1 shrink gap-10 items-start self-stretch my-auto text-[18px] font-light leading-snug whitespace-nowrap basis-0 min-w-[240px] text-neutral-900 max-md:max-w-full">
            <Link href={'/categories'} className='hover:font-normal'>Categories</Link>
          </div>
          <div className="flex gap-6 items-center self-stretch my-auto">
            <div className="flex gap-6 items-center self-stretch p-2 my-auto text-[18px] font-light leading-snug whitespace-nowrap rounded-md text-neutral-900 justify-between">

              <Link href={'/plan'} className="self-stretch my-auto hover:font-normal">Plan & Pricing</Link>
              <Link href={'/contact'} className="self-stretch my-auto hover:font-normal">Contact Us</Link>
              <Link href={'/about'}className="self-stretch my-auto hover:font-normal">About Us</Link>
            </div>
            <div className="flex gap-2 items-start self-stretch p-2 my-auto ">
             <div className='btn-login rounded-lg border border-neutral-300 px-2 py-1 hover:bg-neutral-50'>
            <Link href={'/login'} className='text-[18px] font-light hover:font-normal'>
            Log in
            </Link>
             </div>
             <div className='btn-signup rounded-lg border border-neutral-300 bg-black text-white px-2 py-1 hover:bg-neutral-800'>
            <Link href={'/signup'} className='text-[18px] font-light hover:font-normal'>
            Sign Up
            </Link>
             </div>
            </div>
          </div>
        </div>
  )
}
