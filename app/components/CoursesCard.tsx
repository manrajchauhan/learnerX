import Link from 'next/link';
import React from 'react';

interface ProductCardProps {
    imageSrc: string;
    name: string;
    currentPrice: string;
    originalPrice: string;
    link: string;
  }

  const CoursesCard: React.FC<ProductCardProps> = ({ imageSrc, name, currentPrice, originalPrice,link }) => {
    return (
        <div className="flex overflow-hidden z-0 flex-col justify-center py-16 w-full font-medium text-neutral-900 max-md:px-5 max-md:max-w-full">
    <Link href={link} className="flex flex-col flex-1 shrink bg-white rounded-md border-2 border-solid basis-0 border-neutral-900 min-w-[240px]">
      <img loading="lazy" src={imageSrc} alt={`Product: ${name}`} className="object-cover w-full rounded-md aspect-[1.03]" />
      <div className="flex flex-col p-4 w-full">
        <h2 className="text-3xl leading-snug">{name}</h2>
        <img loading="lazy" src="/under.svg" alt="" className="object-cover mt-4 w-full aspect-[142.86] stroke-[2px] stroke-neutral-900" />
        <div className="flex gap-4 items-start mt-4 w-full text-lg font-semibold leading-8 whitespace-nowrap">
          <span>{currentPrice}</span>
          <span className="flex relative items-start">
            <span className="z-0">{originalPrice}</span>
            <span className="flex absolute -inset-x-1 top-2/4 z-0 shrink-0 h-0.5 -translate-y-2/4 bg-neutral-900 translate-x-[0%] w-[62px]" />
          </span>
        </div>
      </div>
    </Link>
            </div>
    );
}

export default CoursesCard;
