import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <section className="bg-darkBlue-900 pt-24 pb-28">
  <div className="container mx-auto px-4">
    <h1 className="font-heading text-neutral-900 text-center mb-28 text-5xl md:text-7xl font-bold max-w-4xl mx-auto">
    Discover, Learn, and Grow with US</h1>
    <div className="relative mx-auto mb-32 max-w-sm">
      <div className="absolute left-0 top-0 bg-orange-500 blur-3xl filter opacity-50 rounded-full h-full w-full"></div>
      <Image className="relative z-50" width={400} height={400} src="/logo.svg" alt=""/>
    </div>
    <div className="border-b border-orange-500 pb-9 mb-20">
      <div className="flex flex-wrap items-stretch -m-4">
        <div className="w-full md:w-1/3 lg:w-1/2 p-4">
          <div className="border-r border-transparent md:border-white md:border-opacity-10 flex flex-col justify-center h-full">
            <p className="text-neutral-900 text-center md:text-left text-opacity-50 mb-2">LearnerX</p>
            <p className="text-neutral-900 text-center md:text-left mx-auto md:mx-0 text-2xl font-semibold max-w-xs">Funded by Shraddha Kamble</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 p-4">
          <div className="border-r border-transparent md:border-white md:border-opacity-10 flex flex-col justify-center h-full">
            <p className="text-neutral-900 text-opacity-50 mb-2 text-center">Total Courses</p>
            <p className="text-neutral-900 text-5xl font-bold text-center">20</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 p-4">
          <div className="flex flex-col justify-center h-full">
            <p className="text-neutral-900 text-opacity-50 mb-2 text-center">Establised in</p>
            <p className="text-neutral-900 text-5xl font-bold text-center">2024</p>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-wrap -m-4 mb-32">
      <div className="w-full lg:w-1/2 p-4">
        <p className="text-neutral-900 text-xl max-w-lg">LearnerX, we believe in the transformative power of education. Our mission is to empower individuals to achieve their personal and professional goals by providing accessible, high-quality online learning experiences. Whether you're a beginner looking to acquire new skills or a professional seeking to stay ahead in your field, LearnerX offers a wide range of courses tailored to meet your needs.</p>
      </div>
      <div className="w-full lg:w-1/2 p-4">
        <p className="text-neutral-900 text-xl max-w-3xl">Our vision is to build a global community of learners who are equipped with the knowledge and skills to navigate the ever-evolving landscape of technology and industry. We aim to foster a love for learning and continuous personal growth, empowering our users to take control of their futures.</p>
      </div>
    </div>
  </div>
</section>
  )
}
