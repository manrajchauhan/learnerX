"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Course {
  _id: string;
  name: string;
  imageSrc: string;
  currentPrice: string;
  originalPrice: string;
  description: string;
  instructor: string;
  duration: string;
  level: string;
  whatYouWillLearn: string[];
  topics: string[];
  courseContent: string[];
  requirements: string[];
  whoThisCourseIsFor: string[];
  thisCourseIncludes: string[];
}

const isAuthenticated = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    return !!token;
  }
  return false;
};

export default function LearningPage() {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(false);
  const [courses, setCourses] = useState<Course[]>([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      if (!isAuthenticated()) {
        router.push('/login');
      } else {
        setAuth(true);
        fetchCourses();
      }
      setLoading(false);
    };

    checkAuth();
  }, [router]);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <section className="py-12 md:py-24">
        <div className="container mx-auto">
          <div className="mb-16">
            <div className="inline-flex w-full mx-auto items-start mb-8">
              <h1 className="font-heading text-3xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-10xl tracking-tighter pt-4">My Learning</h1>
            </div>
            <ul className="flex -mb-2 flex-wrap items-center">
              <li className="mb-2 mr-2 sm:mr-6">
                <a className="inline-block py-2.5 px-5 text-lg leading-none bg-black text-white rounded-full transition duration-100 hover:bg-black hover:text-white">
                  All Courses
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap -mx-4">
            {courses.map((course) => (
              <div key={course._id} className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-20">
                <div className="group block mb-8">
                  <a href={`/my-learning/${course.name}`} className="group block mb-8">
                    <img
                      src={course.imageSrc || "https://via.placeholder.com/400"}
                      alt={course.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <div className="flex items-center mb-2 text-coolGray-500 group-hover:text-coolGray-600">
                      <span className="text-sm">{course.level || "Level"}</span>
                    </div>
                    <div className="text-coolGray-500 group-hover:text-black flex items-center justify-between pb-4 border-b">
                      <h3 className="text-2xl xs:text-4xl sm:text-5xl tracking-tight">{course.name}</h3>
                      <span className="group-hover:rotate-45 transform transition duration-100">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22 2L2 22" stroke="currentColor" strokeWidth="3.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                          <path d="M22 20.3393V2H3.66071" stroke="currentColor" strokeWidth="3.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
