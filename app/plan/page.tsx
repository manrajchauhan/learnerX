"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const isAuthenticated = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    return !!token;
  }
  return false; // Fallback if not in client context
};

interface ISubscription {
  _id: string;
  name: string;
  price: number;
  priceYearly: number;
  description: string;
}

export default function Page() {
  const [activePlan, setActivePlan] = useState<ISubscription | null>(null);
  const [plans, setPlans] = useState<ISubscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchActivePlan = async () => {
      if (isAuthenticated()) {
        const response = await fetch('/api/user/active-plan');
        if (response.ok) {
          const data = await response.json();
          setActivePlan(data);
        } else {
          console.error('Failed to fetch active plan');
        }
      }
    };

    const fetchPlans = async () => {
      try {
        const response = await fetch('/api/plans');
        if (!response.ok) {
          throw new Error('Failed to fetch plans');
        }
        const data: ISubscription[] = await response.json();
        setPlans(data);
      } catch (err) {
        console.error(err);
        setError('Failed to load plans. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchActivePlan();
    fetchPlans();
  }, []);

  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto mb-20 text-center">
          <h1 className="font-heading text-6xl sm:text-8xl lg:text-10xl text-black tracking-tighter mb-12">
            Subscription Plans
          </h1>
        </div>

        {/* Display error if there's an issue */}
        {error && <div className="text-center text-lg text-red-500 mb-10">{error}</div>}

        {/* Display message if authenticated and no active plan */}
        {isAuthenticated() && !loading && !activePlan && (
          <div className="text-center text-lg text-red-500 mb-10">
            You currently have no active plans. Please choose a subscription plan from below.
          </div>
        )}

        {/* Display subscription plans */}
        <div className="max-w-lg lg:max-w-3xl xl:max-w-5xl mx-auto rounded-4xl overflow-hidden">
          <div className="flex flex-wrap">
            {loading ? (
              <div className="text-center">Loading plans...</div>
            ) : (
              plans.length > 0 ? (
                plans.map(plan => (
                  <div key={plan._id} className="w-full lg:w-1/2 border-b lg:border-b-0 border-neutral-800">
                    <div className="h-full pt-10 pb-12 lg:pb-24 px-8">
                      <div className="max-w-sm mx-auto text-center">
                        <span className="block mb-2 text-xl font-medium text-black">{plan.name}</span>
                        <h3 className="text-7xl tracking-tighter text-black mb-4">
                          ₹{plan.price}
                        </h3>
                        <span className="block mb-4 text-sm text-neutral-500">{plan.description}</span>
                        <p className="text-black mb-10">Subscribe for gaining access to paid courses</p>
                        <Link
                          className="block mb-6 py-5 px-4 text-center leading-none font-medium text-white hover:text-neutral-100 bg-neutral-900 hover:bg-neutral-800 rounded-full transition duration-150"
                          href="#"
                        >
                          Get started
                        </Link>
                        <Link className="inline-block underline hover:no-underline text-black" href="#">
                          Learn more about {plan.name}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-lg text-red-500 mb-10">
                  No subscription plans available. Please check back later.
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
