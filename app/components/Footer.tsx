import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <section className="overflow-hidden mt-10 ">
    <div className="py-24">
      <div className=" px-4 mx-auto">
        <div className="flex flex-wrap justify-between -m-8 mb-28">
          <div className="w-full md:w-1/2 lg:w-4/12 p-8">
            <div className="md:max-w-xs">
              <img className="mb-7" src="/logo.svg" alt=""/>
              <p className="text-gray-800 tracking-tight font-medium">LearnerX, we believe in the transformative power of education. </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/12 p-8">
            <h3 className="mb-6 text-lg text-black font-medium">About</h3>
            <ul>
              <li className="mb-2.5"><a className="inline-block text-lg font-medium text-gray-800 tracking-tight hover:text-black transition duration-300" href="/contact">Contact</a></li>

            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/12 p-8">
            <h3 className="mb-6 text-lg text-black font-medium">Company</h3>
            <ul>
              <li className="mb-2.5"><a className="inline-block text-lg font-medium text-gray-800 tracking-tight hover:text-black transition duration-300" href="/plan">Pricing</a></li>
              <li className="mb-2.5"><a className="inline-block text-lg font-medium text-gray-800 tracking-tight hover:text-black transition duration-300" href="/about">About</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-between -m-2">
          <div className="w-auto p-2">
            <p className="inline-block text-sm font-medium text-black text-opacity-60">© 2024 Learnerx.co</p>
          </div>
          <div className="w-auto p-2">
            <div className="flex flex-wrap items-center -m-2 sm:-m-7">
              <div className="w-auto p-2 sm:p-7"><a className="inline-block text-sm text-black text-opacity-60 hover:text-opacity-100 font-medium transition duration-300" href="#">Terms of Use</a></div>
              <div className="w-auto p-2 sm:p-7"><a className="inline-block text-sm text-black text-opacity-60 hover:text-opacity-100 font-medium transition duration-300" href="#">Privacy Policy</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
