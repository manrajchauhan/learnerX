"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const isAuthenticated = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    return !!token;
  }
  return false;
};

interface ISubscription {
  _id: string;
  name: string;
  price: number;
  billingCycle: string;
  description: string;
  features: string[];
  active: boolean;
}

export default function Page() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {

    setAuth(isAuthenticated());
  }, []);

  const defaultActivePlan: ISubscription = {
    _id: 'default_id',
    name: 'Starter Plan',
    price: 0,
    billingCycle: 'Month',
    description: 'Free Access for 15 days',
    features: ['Access to free courses', 'Access to paid courses', 'Exclusive content'],
    active: true,
  };

  return (
    <>
      <title>Plans & Pricing | LearnerX</title>
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto mb-20 text-center">
            <h1 className="font-heading text-6xl sm:text-8xl lg:text-10xl text-black tracking-tighter mb-12">
              Subscription Plans
            </h1>
          </div>


          {defaultActivePlan.active && (
            <div className="p-6 lg:p-12 mb-8 bg-black rounded-3xl">
              <div className="flex flex-wrap items-center -mx-4">
                <div className="w-full lg:w-1/6 px-4 mb-10 lg:mb-0">
                  <h3 className="text-4xl font-semibold tracking-tight text-white">
                    {defaultActivePlan.name}
                  </h3>
                </div>
                <div className="w-full md:w-1/2 lg:w-2/6 px-4 mb-10 lg:mb-0">
                  <ul className="text-base lg:text-lg text-white">
                    {defaultActivePlan.features.map((feature, index) => (
                      <li className="flex items-center mb-6 tracking-tighter" key={index}>
                        <svg
                          className="w-5 h-4 mr-6"
                          width="20"
                          height="16"
                          viewBox="0 0 20 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                            fill="white"
                          ></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full md:w-1/4 lg:w-1/4 px-4 mb-10 lg:mb-0 text-center lg:border-l border-blueGray-400">
                  <h3 className="mb-3 text-lg font-bold text-orange-300 tracking-tighter">
                    {defaultActivePlan.description}
                  </h3>
                  <div className="mb-1 flex justify-center font-bold text-white">
                    <span className="self-start inline-block mr-1 text-xl">$</span>
                    <p className="self-end text-5xl">{defaultActivePlan.price}</p>
                  </div>
                  <p className="mb-10 text-lg text-white">/{defaultActivePlan.billingCycle}</p>
                </div>
                <div className="w-full lg:w-1/4 text-center lg:text-right">
                  <Link
                    className="inline-block w-full py-4 px-4 border bg-white hover:border-blueGray-300 rounded-full text-center text-xl text-black tracking-tighter"
                    href= {auth ? "/" : "/signup"}
                  >
                    {auth ? 'Active Plan' : 'Sign Up for free'}
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
