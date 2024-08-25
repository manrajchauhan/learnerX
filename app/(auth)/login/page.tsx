import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className="flex overflow-hidden gap-2.5 justify-center items-center px-20 py-36 bg-white max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col items-center self-stretch my-auto min-w-[240px] w-[448px] max-md:max-w-full">
        <div className="flex flex-col items-center mt-14 text-center max-md:mt-10">
          <div className="text-5xl tracking-tighter leading-none text-neutral-900 max-md:text-4xl">
            Welcome Back
          </div>
          <div className="mt-3 text-sm leading-none text-neutral-700">
            Enter your email and password to access your account
          </div>
        </div>
        <div className="flex flex-col self-stretch mt-14 w-full max-md:mt-10 max-md:max-w-full">
          <form className="flex flex-col mt-8 w-full max-md:max-w-full">
            <div className="flex flex-col w-full max-md:max-w-full">
              <div className="flex flex-col justify-center w-full text-sm leading-none max-md:max-w-full">
                <label htmlFor='email' className="self-start font-medium text-center text-neutral-900">
                  Email
                </label>
                <input type="text" name='email' placeholder=' Enter your email' className="overflow-hidden flex-1 shrink gap-2.5 self-stretch p-4 mt-2 w-full bg-white border border-gray-200 border-solid text-neutral-500 max-md:max-w-full">
                </input>
              </div>
              <div className="flex flex-col justify-center mt-6 w-full max-md:max-w-full">
                <div className="flex flex-col justify-center w-full text-sm leading-none max-md:max-w-full relative">
                  <label htmlFor='password' className="self-start font-medium text-center text-neutral-900">
                    Password
                  </label>
                  <input type='password' name='password' placeholder=' Enter your password' className="flex overflow-hidden gap-2.5 justify-center items-center p-4 mt-2 w-full bg-white border border-gray-200 border-solid text-neutral-500 max-md:max-w-full">
                </input>
                <Image
                src="/eye.svg"
                className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square absolute right-3 bottom-4 cursor-pointer"
                width={10}
                height={10}
                alt='eye-btn'/>
                </div>
                <div className="flex gap-10 justify-between items-center mt-3 w-full max-md:max-w-full">
                  <div className="self-stretch my-auto text-sm font-medium leading-none text-center text-neutral-700">
                    Forgot Password
                  </div>
                </div>
              </div>
            </div>
            <button type='submit' className="text-center gap-2.5 self-stretch px-4 py-3.5 mt-10 w-full text-base font-semibold text-white bg-neutral-900 max-md:max-w-full">
              Sign In
            </button>
            <div className="self-center mt-10 text-sm font-medium leading-7 text-neutral-700">
              <span className=" text-neutral-700">Don’t have an account?</span>{" "}
              <span className="text-neutral-900">Sign Up</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
