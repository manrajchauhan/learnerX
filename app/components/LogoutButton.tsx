'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    // Remove the JWT token from localStorage
    localStorage.removeItem('token');

    // Redirect the user to the login page
    router.push('/login');
  };

  return (
    <button
      onClick={handleLogout}
      className="text-center gap-2.5 px-4 py-2 w-full text-base font-semibold text-white bg-red-600 hover:bg-red-700 rounded-md"
    >
      Log Out
    </button>
  );
}
