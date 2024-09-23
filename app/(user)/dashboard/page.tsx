'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LogoutButton from '@/app/components/LogoutButton';

export default function DashboardPage() {
  const router = useRouter(); 

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      // Redirect to login page if token is not present
      router.push('/login');
    }
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-neutral-900 mb-8">Dashboard</h1>
      <LogoutButton />
    </div>
  );
}
