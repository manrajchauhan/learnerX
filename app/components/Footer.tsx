import React from 'react'
import FooterLinks from '../utils/Footer/FooterLinks'
import ContactInfo from '../utils/Footer/ContactInfo'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="flex overflow-hidden z-0 flex-col justify-center px-10 pt-20 w-full border-t border-solid border-t-neutral-900 max-md:max-w-full">
    <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
      <div className="flex flex-col items-start min-w-[240px] w-[296px]">
       <Image
       src={'/logo.svg'}
       width={203}
       height={39}
       alt='brand logo'
       />
      </div>
      <FooterLinks />
      <ContactInfo />
    </div>
    <div className="overflow-hidden gap-2.5 self-stretch mt-10 w-full text-lg font-semibold leading-8 text-neutral-900 max-md:max-w-full">
      <span className="font-light text-neutral-900">Powered by </span>
      <a
        className="text-neutral-600"
        target="_blank"
      >
        LearnerX
      </a>
      <span className="font-light text-neutral-900"> | </span>
      <a
        className="text-neutral-700"
        target="_blank"
      >
       © 2024-25
      </a>
      {/* <span className="font-light text-neutral-900"> |</span>{" "}
      <a
        href=""
        className="underline text-neutral-900"
        target="_blank"
      >
        Licensing
      </a> */}
    </div>
  </footer>
  )
}
