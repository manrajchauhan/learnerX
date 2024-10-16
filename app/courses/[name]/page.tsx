"use client";
import React, { FC, useState, useEffect } from 'react';
import HeroBottom from '@/app/components/HeroBottomCourses';
import Image from 'next/image';
import { FaVideo, FaFileAudio, FaFilePdf } from 'react-icons/fa';
import { useAuth } from '@/app/context/AuthContext';
import Link from 'next/link';

interface Course {
  _id: string;
  imageSrc: string;
  name: string;
  instructor: string;
  duration: string;
  level: string;
  currentPrice: number;
  originalPrice: number;
  description: string;
  syllabusImage?: string;
  whatYouWillLearn: string[];
  topics: string[];
  courseContent: { title: string; videoId: string }[];
  requirements: string[];
  whoThisCourseIsFor: string[];
  thisCourseIncludes: string[];
}

interface PageProps {
  params: {
    name: string;
  };
}

const CourseDetails: React.FC<PageProps> = ({ params }) => {
  const { name } = params;
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await fetch(`/api/courses/${name}`);
        if (!response.ok) {
          throw new Error('Failed to fetch course details');
        }
        const data: Course = await response.json();
        setCourse(data);
      } catch (err) {
        console.error(err);
        setError('Failed to load course details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCourseDetails();
  }, [name]);

  if (loading) {
    return <div>Loading course details...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!course) {
    return <div>No course found.</div>;
  }

  return (
    <>
      <div className='relative flex flex-col justify-between overflow-hidden'>
        <HeroBottom
          title={course.name}
          description={course.description}
          instructor={course.instructor}
          duration={course.duration}
          level={course.level}
          price={course.currentPrice}
          originalPrice={course.originalPrice}
        />
      </div>

      <div className="mx-auto gap-40 flex">
        <section className="max-w-full">
          <h1 className='text-black pt-8 pb-4 text-3xl font-bold tracking-tighter'>What You'll Learn</h1>
          <hr className='mb-10'/>
          <ul className='list-disc pl-5 mb-10'>
            {course.whatYouWillLearn.map((item, index) => (
              <li key={index} className='text-heading text-base tracking-tight'>{item}</li>
            ))}
          </ul>

          <h1 className='text-black pt-8 pb-4 text-3xl font-bold tracking-tighter'>Topics</h1>
          <hr className='mb-10'/>
          <ul className='list-disc pl-5 mb-10'>
            {course.topics.map((item, index) => (
              <li key={index} className='text-heading text-base tracking-tight'>{item}</li>
            ))}
          </ul>

          <h1 className='text-black pt-8 pb-4 text-3xl font-bold tracking-tighter'>Course Content</h1>
          <hr className='mb-10'/>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-100'>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'></th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Content</th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
              {course.courseContent.map((item, index) => {
                let icon;
                if (item.title.endsWith('.mp4')) {
                  icon = <FaVideo className="text-heading" />;
                } else if (item.title.endsWith('.mp3')) {
                  icon = <FaFileAudio className="text-heading" />;
                } else if (item.title.endsWith('.pdf')) {
                  icon = <FaFilePdf className="text-heading" />;
                } else {
                  icon = <span className="text-heading">📄</span>;
                }

                return (
                  <tr key={index}>
                    <td className='px-6 py-4 whitespace-nowrap text-heading text-base tracking-tight'>{icon}</td>
                    <td className='px-6 py-4 whitespace-nowrap text-heading text-base tracking-tight'>{item.title}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <h1 className='text-black pt-8 pb-4 text-3xl font-bold tracking-tighter'>Requirements</h1>
          <hr className='mb-10'/>
          <ul className='list-disc pl-5 mb-10'>
            {course.requirements.map((item, index) => (
              <li key={index} className='text-heading text-base tracking-tight'>{item}</li>
            ))}
          </ul>

          <h1 className='text-black pt-8 pb-4 text-3xl font-bold tracking-tighter'>Who This Course Is For</h1>
          <hr className='mb-10'/>
          <ul className='list-disc pl-5 mb-10'>
            {course.whoThisCourseIsFor.map((item, index) => (
              <li key={index} className='text-heading text-base tracking-tight'>{item}</li>
            ))}
          </ul>
        </section>

        <section className="text-headingchild text-md w-[30%] sticky top-16 h-[75vh] flex flex-col justify-between mx-auto">
          <div className="border p-6 bg-white rounded-[14px]">
            <Image
              src={course.imageSrc}
              alt={course.name}
              width={200}
              height={200}
              sizes='1000vw'
              className='h-60 w-full object-cover hover:scale-105 duration-100 rounded-[20px]'
            />
            <h2 className='text-black mt-4 text-3xl mb-2 font-bold'>
              {course.currentPrice} <span className='line-through text-gray-500 text-lg'>{course.originalPrice}</span>
            </h2>

            <h1 className='text-black py-2 text-base font-bold tracking-tighter'>Course Includes</h1>
            <ul className='list-disc pl-5 mb-10'>
              {course.thisCourseIncludes && course.thisCourseIncludes.length > 0 ? (
                course.thisCourseIncludes.map((item, index) => (
                  <li key={index} className='text-heading text-base'>{item}</li>
                ))
              ) : (
                <li className='text-heading text-base tracking-tight'>No additional materials included.</li>
              )}
            </ul>

            {isAuthenticated ? (
              <>
                <h1 className='text-center underline'>Already Enrolled</h1>
                <div className='bg-black flex text-center border justify-center mt-2 gap-2 rounded-xl px-3 py-3'>
                  <Link
                    className='text-center text-white text-lg font-semibold'
                    href={'/my-learning'}
                  >
                    Go To Learning
                  </Link>
                </div>
              </>
            ) : (
              <div className='bg-black flex text-center border justify-center mt-8 gap-2 rounded-xl px-3 py-3'>
                <Link
                  className='text-center text-white text-lg font-semibold'
                  href={'/signup'}
                >
                  Sign Up To Enroll Free
                </Link>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default CourseDetails;
