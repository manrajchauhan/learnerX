"use client";
import React, { useEffect, useState } from 'react';
import CoursesCard from './CoursesCard';

interface Course {
  _id: string;
  imageSrc: string;
  name: string;
  currentPrice: string;
  originalPrice: string;
  link: string;
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
      <div className="flex-1 shrink text-6xl basis-0 leading-[103px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px] font-medium text-neutral-900">
        Recent Courses
      </div>
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
              link={course.link}
            />
          ))
        )}
      </main>
    </div>
  );
};

export default Courses;
