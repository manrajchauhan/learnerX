import React from 'react';
import CoursesCard from './CoursesCard';

interface Product {
  id: number;
  imageSrc: string;
  name: string;
  currentPrice: string;
  originalPrice: string;
  link: string;
}

const products: Product[] = [
  { id: 1, imageSrc: "/course1.png", name: "Complete python Course", currentPrice: "₹ 299/-", originalPrice: "₹ 499/-",link:'/hello' },
  { id: 2, imageSrc: "/course1.png", name: "Complete python Course", currentPrice: "₹ 299/-", originalPrice: "₹ 499/-",link:'/mino' },
  { id: 3, imageSrc: "/course1.png", name: "Complete python Course", currentPrice: "₹ 299/-", originalPrice: "₹ 499/-",link:'/hello' },
  { id: 4, imageSrc: "/course1.png", name: "Complete python Course", currentPrice: "₹ 299/-", originalPrice: "₹ 499/-",link:'/hello' },
];

const Courses: React.FC = () => {
  return (
    <div className='Courses mt-10'>
      <div className="flex-1 shrink text-6xl basis-0 leading-[103px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px] font-medium text-neutral-900">
             Recent Courses
      </div>
    <main className="md:flex grid gap-10 text-neutral-900">
      {products.map((product) => (
        <CoursesCard
          key={product.id}
          imageSrc={product.imageSrc}
          name={product.name}
          currentPrice={product.currentPrice}
          originalPrice={product.originalPrice}
          link={product.link}

        />
      ))}
    </main>
    </div>
  );
};

export default Courses;