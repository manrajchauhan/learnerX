'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const servicesData = [
  {
    title: 'Artificial Intelligence',
    description: 'Artificial intelligence (AI) is a field of study that involves creating machines and computers that can learn, reason, and act in ways that usually require human intelligence.',
    services: [
      'FPGA design',
      'PCB design',
      'Preparing for manufacturing',
      'Certification',
      'Prototyping'
    ],
    GoTo: '/AI'
  },
  {
    title: 'Web Development',
    description: 'Web development is the process of building, programming, and maintaining websites and web applications',
    services: [
      'Software Development',
      'Board support package development',
      'Prototyping with SBC',
      'RTOS'
    ],
    GoTo: '/Web-development'
  },
  {
    title: 'Web Designing',
    description: 'Web design involves creating the visual elements and layout of a website.',
    services: [
      'Linux',
      'macOS',
      'Windows',
      'Android'
    ],
    GoTo: '/Web-designing'
  },
  {
    title: 'Data Science',
    description: 'Data science is a multidisciplinary field that uses data analysis to extract insights for business.',
    services: [
      'Middleware',
      'BSP',
      'Utilities',
      'Drivers',
      'Qt',
      'C/C++'
    ],
    GoTo: '/data-science'
  },
  {
    title: 'IoT',
    description: 'The collective network of connected devices and the technology that facilitates communication between devices and the cloud, as well as between the devices themselves.',
    services: [
      'Industrial IoT',
      'Industry 4.0',
      'AWS IoT',
      'M2M',
      'Predictive maintenance',
      'Digital transformation',
      'Azure IoT'
    ],
    GoTo: '/iot'
  }
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <section className="py-12 md:py-24 bg-coolGray-50 overflow-hidden" id='services'>
      <div className="mx-auto px-4">
      <div className="flex flex-wrap gap-10 items-end w-full max-md:max-w-full">
<li className="text-md font-normal mt-10 tracking-tight list-disc">
  Categories
  <h2 className="text-[70px] font-extrabold tracking-tighter mb-20 bg-clip-text">
Courses by Categories
</h2>
</li>

</div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-7/12 px-4 mb-20 lg:mb-0 self-center">
            <div className="max-w-lg xl:max-w-none mx-auto lg:mr-0">
              {servicesData.map((service, index) => (
                <div key={index} className="mb-8">
                  <button className="group block text-left w-full pb-6 mb-8 border-b" onClick={() => toggleAccordion(index)}>
                    <div className="flex items-center">
                      <span className="inline-block mr-8 text-sm">{`0${index + 1}`}</span>
                      <li className="inline-block text-2xl lg:text-3xl xl:text-4xl tracking-tighter">{service.title}</li>
                      <span className={`ml-auto inline-block transform ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.8223 15.0312L12.4993 21.3542L6.17643 15.0313" stroke="black" strokeWidth="1.61806" strokeLinecap="round" strokeLinejoin="round"></path>
                          <path d="M12.5 3.646L12.5 21.1772" stroke="black" strokeWidth="1.61806" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </span>
                    </div>
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: openIndex === index ? 'auto' : 0 }}
                      className="overflow-hidden duration-500"
                    >
                      <div className="mt-6 pr-10">
                        <p>{service.description}</p>

                        {/* <ul className='flex flex-col gap-2 mt-4'>
                          {service.services.map((item, i) => (
                            <li className='font-bold' key={i}>• {item}</li>
                          ))}
                        </ul> */}

                      </div>
                    </motion.div>

                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
