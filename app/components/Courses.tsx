"use client";
import React, { useEffect, useState } from 'react';
import CoursesCard from './CoursesCard';
import Link from 'next/link';

interface Course {
  _id: string;
  imageSrc: string;
  name: string;
  currentPrice: number;
  originalPrice: number;
}

const Courses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('/api/courses');
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }
        const data: Course[] = await response.json();
        setCourses(data);
      } catch (err) {
        console.error(err);
        setError('Failed to load courses. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="Courses mt-10">
      <div className=''>
        {/* <Features/> */}
      </div>
      <main id='property' className='mb-6'>
        <div className='propt flex col-2'>
          <div className='f1prop'>
            <li className="text-md font-normal mt-10 tracking-tight list-disc">
              Courses
            </li>
            <h2 className="text-[70px] font-extrabold tracking-tighter mb-20 bg-clip-text">
              Discover New Courses
            </h2>
          </div>
          <div className='f2prop mt-16 p-10 ml-20'>
            <Link href={'/properties'} className='text-center border p-2 rounded-[16px] flex t hover:bg-neutral-50 ext-lg tracking-tight bg-white'>
              View all Courses <span className='border ml-2 p-2 rounded-[20px]'>→</span>
            </Link>
          </div>
        </div>
      </main>
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-neutral-900 mt-6">
        {loading ? (
          <div className="text-center">Loading courses...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : courses.length === 0 ? (
          <div className="text-center text-lg text-gray-500">No courses available at the moment. Please check back later.</div>
        ) : (
          courses.map((course) => (
            <CoursesCard
              key={course._id}
              imageSrc={course.imageSrc}
              name={course.name}
              currentPrice={course.currentPrice}
              originalPrice={course.originalPrice}
              link={`/courses/${course.name}`}
            />
          ))
        )}
      </main>
    </div>
  );
};

export default Courses;
