import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
export default function notFound() {
  return (
    <div>
<section className="py-24 md:py-32 xl:py-52 overflow-hidden">
    <div className="container mx-auto px-4">
        <div className="text-center">
          <Image alt="404" loading="lazy" width={500} height={500} decoding="async" data-nimg="1" className="block w-full max-w-sm md:max-w-lg lg:max-w-2xl mb-5 mx-auto" src="/404.svg"/>
            <p className="max-w-md mx-auto mb-12 text-lg text-gray-700">The page you are looking for was moved, removed, renamed, or might have never existed!</p>
            <Link className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-white hover:text-neutral-900 border border-neutral-900 hover:border-neutral-500 bg-neutral-900 hover:bg-neutral-100 rounded-full transition duration-200"
            href="/">Back to home</Link></div>
    </div>
</section>
    </div>
  )
}
