"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

export default function Header() {
    const { isAuthenticated, logout, user } = useAuth();

    return (
      <div className="flex flex-wrap flex-1 shrink gap-10 items-center self-stretch py-4 my-auto w-full border-b border-solid basis-0 border-b-neutral-900 min-w-[240px] max-md:max-w-full">
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
        <div className="flex flex-wrap flex-1 shrink gap-10 items-start self-stretch my-auto text-[16px] font-light leading-snug whitespace-nowrap basis-0 min-w-[240px] text-neutral-900 max-md:max-w-full">
        </div>
        <div className="flex gap-6 items-center self-stretch my-auto">
          <div className="flex gap-6 items-center self-stretch p-2 my-auto text-[16px] font-light leading-snug whitespace-nowrap rounded-md text-neutral-900 justify-between">
          {isAuthenticated ? (
              <>
                <Link href={'/my-learning'} className="self-stretch my-auto hover:font-normal tracking-tighter">My Learning</Link>
                <Link href={'/plan'} className="self-stretch my-auto hover:font-normal tracking-tighter">Plan & Pricing</Link>
              </>
            ) : (
              <>
                <Link href={'/contact'} className="self-stretch my-auto hover:font-normal tracking-tighter">Contact Us</Link>
                <Link href={'/about'} className="self-stretch my-auto hover:font-normal tracking-tighter">About Us</Link>
                <Link href={'/plan'} className="self-stretch my-auto hover:font-normal tracking-tighter">Pricing</Link>
              </>
            )}
          </div>
          <div className="flex gap-2 items-start self-stretch p-2 my-auto">
            {isAuthenticated ? (
              <>
                <button
                  onClick={logout}
                  className='btn-logout rounded-xl border border-neutral-900 bg-black text-white px-2 py-1 hover:bg-neutral-800 tracking-tighter'
                >
                  Logout
                </button>
                {/* <div className='user px-2 py-1 flex justify-center items-center rounded-full bg-neutral-900 text-white w-8 h-8'>
                  {userInitial}
                </div> */}
              </>
            ) : (
              <>
                <div className='btn-login border-neutral-900 px-2 py-1 hover:bg-neutral-50'>
                  <Link href={'/login'} className='text-[16px] font-light hover:font-normal tracking-tighter'>
                    Log in
                  </Link>
                </div>
                <div className='btn-signup rounded-3xl border border-neutral-900 bg-black text-white px-2 py-1 hover:bg-neutral-800'>
                  <Link href={'/signup'} className='text-[16px] font-light hover:font-normal tracking-tighter'>
                    Sign Up
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
