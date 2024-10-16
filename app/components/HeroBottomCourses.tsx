import React from 'react';

const HeroBottom = ({ title, description, duration, level, price,instructor,originalPrice }: { title: string, description: string, instructor: string, duration: string, level: string, price: number ,originalPrice:number }) => {
  return (
    <div className='mt-10 rounded-lg shadow-lg'>
      <div className="text-black flex flex-col gap-4 pb-10">
        <h1 className='font-semibold text-6xl tracking-tight'>{title}</h1>
        <h6 className='text-xl font-light tracking-tight'>{description}</h6>
        <h1 className='text-5xl font-bold tracking-tighter'>{price}
        <span className='line-through text-gray-500 text-5xl px-2'>{originalPrice}</span>
        </h1>
      </div>

      <ul className='text-black flex justify-between border-t border-neutral-300 py-8'>
        <ol className="flex gap-10 items-center justify-center">
          <li className="flex flex-col items-center">
            <p className='text-3xl font-normal'>{duration}</p>
            <span className='text-sm'>Duration</span>
          </li>
          <li className="flex flex-col items-center">
            <p className='text-3xl font-normal'>{level}</p>
            <span className='text-sm'>Level</span>
          </li>
          <li className="flex flex-col items-center">
            <p className='text-3xl font-normal'>{instructor}</p>
            <span className='text-sm'>Created By</span>
          </li>
        </ol>
      </ul>
    </div>
  );
}

export default HeroBottom;
