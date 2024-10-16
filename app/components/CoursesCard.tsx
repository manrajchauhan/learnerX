import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  imageSrc: string;
  name: string;
  currentPrice: number;
  originalPrice: number;
  link: string;
}

const CoursesCard: React.FC<ProductCardProps> = ({imageSrc, name, currentPrice, originalPrice,link }) => {
  return (
    <>
        <section className='gap-10'>
            <div>
              <div className="border overflow-hidden rounded-[20px] p-4 bg-white">
                <section className='relative h-60 overflow-hidden rounded-[20px]'>
                  <Image src={imageSrc} alt={name} width={400} height={400} sizes='1000vw' className='h-60 w-full object-cover hover:scale-110 duration-100 rounded-[20px]' />
                </section>
                <div className='w-full p-2 mt-2 text-headingchild'>
                  <h1 className='text-neutral-800 font-semibold text-[34px] tracking-tighter'>{name}</h1>
                  <div className='flex justify-between'>
                    <li className='text-[30px] flex font-bold items-center gap-2 mt-8 text-black'>
                    {currentPrice}
                      <span className='line-through text-gray-500 text-lg'>₹ {originalPrice}</span>
                    </li>
                    <div className='mt-12'>
                    <Link href={link} className='border px-4 p-2 rounded-[8px] text-black hover:bg-neutral-100'>
  View
</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
    </>
  );
}

export default CoursesCard;
