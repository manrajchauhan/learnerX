"use client"
import Link from 'next/link';
import React, { useState } from 'react';

export default function Page() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto mb-20 text-center">
          <h1 className="font-heading text-6xl sm:text-8xl lg:text-10xl text-black tracking-tighter mb-12">
            Subscription Plans
          </h1>
          <div className="flex flex-col xs:flex-row mb-10 items-center justify-center">
            <span className={`text-xl ${toggle ? 'text-black' : 'text-orange-500'}`}>
              Billed monthly
            </span>
            <div className="inline-flex p-0.5 my-4 xs:my-0 xs:mx-4 lg:mx-8 bg-orange-500 rounded-full">
              <button
                className={`inline-block w-7 h-7 rounded-full ${!toggle ? 'bg-white' : 'bg-transparent'}`}
                onClick={handleToggle}
              ></button>
              <button
                className={`inline-block w-7 h-7 rounded-full ${toggle ? 'bg-white' : 'bg-transparent'}`}
                onClick={handleToggle}
              ></button>
            </div>
            <div className="inline-flex items-center">
              <span className={`inline-block mr-3 text-xl ${toggle ? 'text-orange-500' : 'text-black'}`}>
                Billed yearly
              </span>
              <span className="inline-block py-1.5 px-3 text-xs text-black border-1.5 border-white rounded-full">
                20% SAVE
              </span>
            </div>
          </div>
        </div>
        <div className="max-w-lg lg:max-w-3xl xl:max-w-5xl mx-auto rounded-4xl overflow-hidden">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 border-b lg:border-b-0 lg:border-r border-neutral-800">
              <div className="h-full pt-10 pb-12 lg:pb-24 px-8">
                <div className="max-w-sm mx-auto text-center">
                  <span className="block mb-2 text-xl font-medium text-black">Starter plan</span>
                  <h3 className="text-7xl tracking-tighter text-black mb-4">Free</h3>
                  <span className="block mb-4 text-sm text-neutral-500">
                    Almost free
                  </span>
                  <p className="text-black mb-10">
                    Subscribe for gaining access of free courses
                  </p>
                  <Link
                    className="block mb-6 py-5 px-4 text-center leading-none font-medium text-black hover:border hover:border-black rounded-full transition duration-150"
                    href="#"
                  >
                    Get started
                  </Link>
                  <Link className="inline-block underline hover:no-underline text-black" href="#">
                    Learn more about Free
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="h-full pt-12 lg:pt-10 pb-24 px-8">
                <div className="max-w-sm mx-auto text-center">
                  <span className="block mb-2 text-xl font-medium text-black">Professional plan</span>
                  <h3 className={`text-7xl text-black tracking-tighter mb-4 ${!toggle ? 'block' : 'hidden'}`}>
                  ₹59
                  </h3>
                  <h3 className={`text-7xl text-black tracking-tighter mb-4 ${toggle ? 'block' : 'hidden'}`}>
                  ₹699
                  </h3>
                  <span className="block mb-4 text-sm text-neutral-500">
                    Switch to annual plan to save 15%
                  </span>
                  <p className="text-black mb-10">
                  Subscribe for gaining access of paid courses
                  </p>
                  <Link
                    className="block mb-6 py-5 px-4 text-center leading-none font-medium text-white hover:text-neutral-100 bg-neutral-900 hover:bg-neutral-800 rounded-full transition duration-150"
                    href="#"
                  >
                    Get started
                  </Link>
                  <Link className="inline-block underline hover:no-underline text-black" href="#">
                    Learn more about Professional
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
