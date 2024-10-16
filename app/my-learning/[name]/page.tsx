"use client";
import React, { useState, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa';
import { useAuth } from '@/app/context/AuthContext';
import { useRouter } from 'next/navigation';

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

const LearningDetails: React.FC<PageProps> = ({ params }) => {
  const { name } = params;
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedLecture, setSelectedLecture] = useState<string | null>(null);

  useEffect(() => {
    const isAuthenticated = () => {
        if (typeof window !== 'undefined') {
          const token = localStorage.getItem('token');
          return !!token;
        }
        return false;
      };
    const fetchCourseDetails = async () => {
      if (!isAuthenticated) {
        router.push('/login');
        return;
      }

      try {
        const response = await fetch(`/api/courses/${name}`);
        if (!response.ok) {
          throw new Error('Failed to fetch course details');
        }
        const data: Course = await response.json();
        setCourse(data);

        if (data.courseContent.length > 0) {
          setSelectedLecture(data.courseContent[0].videoId);
        }
      } catch (err) {
        console.error(err);
        setError('Failed to load course details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCourseDetails();
  }, [isAuthenticated, name, router]);

  const handleLectureClick = (videoId: string) => {
    setSelectedLecture(videoId);
  };

  if (loading) return <div>Loading course details...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!course) return <div>No course found.</div>;

  return (
    <>
      <title>{`Course: ${course.name}`}</title>
      <div className="gap-10 flex mt-10">
        <section className="max-w-full">
          <iframe
            width="800"
            height="500"
            src={selectedLecture ? `https://www.youtube.com/embed/${selectedLecture}` : 'https://www.youtube.com/embed/ENrzD9HAZK4?si=j0f3h_A4wYJROhEe'}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <div className="text-black flex flex-col gap-4 mt-10">
            <h1 className='font-semibold text-6xl tracking-tight'>{course.name}</h1>
            <h6 className='text-xl font-light tracking-tight'>{course.description}</h6>
          </div>
          <ul className='text-black flex justify-between py-8'>
            <ol className="flex gap-10 items-center justify-center">
              <li className="flex flex-col items-center">
                <p className='text-3xl font-normal'>{course.duration}</p>
                <span className='text-sm'>Duration</span>
              </li>
              <li className="flex flex-col items-center">
                <p className='text-3xl font-normal'>{course.level}</p>
                <span className='text-sm'>Level</span>
              </li>
              <li className="flex flex-col items-center">
                <p className='text-3xl font-normal'>{course.instructor}</p>
                <span className='text-sm'>Created By</span>
              </li>
            </ol>
          </ul>

          <h1 className='text-black pt-8 pb-4 text-3xl font-bold tracking-tighter'>What You'll Learn</h1>
          <hr className='mb-10'/>
          <ul className='list-disc pl-5 mb-10'>
            {course.whatYouWillLearn.map((item, index) => (
              <li key={index} className='text-heading text-base tracking-tight'>{item}</li>
            ))}
          </ul>

          {/* Topics Section */}
          <h1 className='text-black pt-8 pb-4 text-3xl font-bold tracking-tighter'>Topics</h1>
          <hr className='mb-10'/>
          <ul className='list-disc pl-5 mb-10'>
            {course.topics.map((item, index) => (
              <li key={index} className='text-heading text-base tracking-tight'>{item}</li>
            ))}
          </ul>

          {/* Requirements Section */}
          <h1 className='text-black pt-8 pb-4 text-3xl font-bold tracking-tighter'>Requirements</h1>
          <hr className='mb-10'/>
          <ul className='list-disc pl-5 mb-10'>
            {course.requirements.map((item, index) => (
              <li key={index} className='text-heading text-base tracking-tight'>{item}</li>
            ))}
          </ul>

          {/* Who This Course Is For Section */}
          <h1 className='text-black pt-8 pb-4 text-3xl font-bold tracking-tighter'>Who This Course Is For</h1>
          <hr className='mb-10'/>
          <ul className='list-disc pl-5 mb-10'>
            {course.whoThisCourseIsFor.map((item, index) => (
              <li key={index} className='text-heading text-base tracking-tight'>{item}</li>
            ))}
          </ul>

          {/* What This Course Includes Section */}
          <h1 className='text-black pt-8 pb-4 text-3xl font-bold tracking-tighter'>What This Course Includes</h1>
          <hr className='mb-10'/>
          <ul className='list-disc pl-5 mb-10'>
            {course.thisCourseIncludes.map((item, index) => (
              <li key={index} className='text-heading text-base tracking-tight'>{item}</li>
            ))}
          </ul>
        </section>

        {/* Sidebar Section */}
        <section className="text-headingchild text-md sticky top-16 h-[75vh] flex flex-col justify-between mx-auto">
          <div className="border p-6 bg-white rounded-[14px] overflow-y-auto">
            <h1 className='text-black py-2 text-3xl font-bold tracking-tighter'>Course Content</h1>
            <hr className='mb-4' />

            {/* Check if courseContent exists and is an array */}
            {Array.isArray(course.courseContent) && course.courseContent.length > 0 ? (
              <div className="overflow-auto max-h-[60vh]">
                {course.courseContent.map((content, index) => (
                  <div key={index} className="flex justify-between items-center border-b py-2">
                    <div className="flex items-center">
                      <span className="text-heading text-base">{`Lecture ${index + 1}:`}</span>
                      <span className="text-heading text-base ml-2">{content.title}</span>
                      <button
                        onClick={() => handleLectureClick(content.videoId)}
                        className="ml-4 text-blue-500 hover:text-blue-700 flex items-center"
                      >
                        <FaPlay className="mr-1" />
                        Play
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className='text-heading text-base tracking-tight'>No course content available.</div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default LearningDetails;
