import Link from 'next/link';
import React from 'react';

const ContactInfo = () => {
  return (
    <section className="flex flex-col items-start min-w-[240px] text-neutral-900 w-[296px]">
      <div className="flex flex-col">
        <h3 className="text-2xl font-medium leading-tight">Contact & Help</h3>
        <nav className="flex flex-col mt-6 text-xl font-light leading-9">
          <Link href="mailto:learnerxgroup@gmail.com">learnerxgroup@gmail.com</Link>
          <Link href="#" className="mt-4">Terms & Conditions</Link>
          <Link href="#" className="mt-4">Contact Us</Link>
          <Link href="#" className="mt-4">FAQ</Link>
        </nav>
      </div>
    </section>
  );
};

export default ContactInfo;