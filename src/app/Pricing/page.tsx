"use client";
import Companysec from "@/components/Company";
import SecondaryNavbar from "@/components/Navbar";
import PricingFAQs from "@/components/Pricing";
import TrialButton from "@/components/Team3";
import {  useState } from "react";
import React from 'react';

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false); // State to toggle between Monthly and Yearly

  // Pricing data
  const pricingPlans = [
    {
      name: "FREE",
      description: "Organize across all apps by hand",
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        { feature: "Unlimited product updates", available: true },
        { feature: "1GB Cloud storage", available: false },
        { feature: "Email and community support", available: false },
      ],
    },
    {
      name: "STANDARD",
      description: "Organize across all apps by hand",
      monthlyPrice: 9.99,
      yearlyPrice: 89.99,
      features: [
        { feature: "Unlimited product updates", available: true },
        { feature: "1GB Cloud storage", available: true },
        { feature: "Email and community support", available: true },
      ],
    },
    {
      name: "PREMIUM",
      description: "Organize across all apps by hand",
      monthlyPrice: 19.99,
      yearlyPrice: 179.99,
      features: [
        { feature: "Unlimited product updates", available: true },
        { feature: "1GB Cloud storage", available: true },
        { feature: "Email and community support", available: true },
      ],
    },
  ];

  return (
   <div>
    <SecondaryNavbar/>

    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900">Pricing</h2>
        <p className="mt-2 text-lg text-gray-600">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>

        {/* Toggle Monthly/Yearly */}
        <div className="flex justify-center items-center mt-6 space-x-4">
          <span className="text-gray-600">Monthly</span>
          <div className="relative inline-flex items-center">
            <input
              type="checkbox"
              className="peer sr-only"
              id="billingToggle"
              onChange={() => {
                setIsYearly(!isYearly);
                console.log("Toggle State:", !isYearly); // Debugging
              }}
              checked={isYearly}
            />
            <div className="w-10 h-6 bg-blue-100 peer-checked:bg-blue-600 rounded-full cursor-pointer relative transition">
              <div className="absolute w-4 h-4 bg-white rounded-full top-1 left-1 peer-checked:left-5 transition"></div>
            </div>
          </div>
          <span className="text-blue-600 font-semibold">
            Yearly <span className="text-sm">(Save 25%)</span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white border rounded-lg shadow-md p-6 flex flex-col"
            >
              <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
              <p className="text-sm text-gray-600">{plan.description}</p>
              <p className="text-3xl font-extrabold mt-4">
                ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}{" "}
                <span className="text-lg font-normal">
                  / {isYearly ? "year" : "month"}
                </span>
              </p>
              <ul className="mt-6 space-y-2">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className={`flex items-center ${
                      feature.available ? "text-green-600" : "text-gray-400"
                    }`}
                  >
                    <span className="material-icons">
                      {feature.available ? "check" : "close"}
                    </span>
                    <span className="ml-2">{feature.feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-auto bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                Try for free
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
    <div>
      <Companysec/>
    </div>
    <div>
      <PricingFAQs/>
    </div>
    <div>
      <TrialButton/>
    </div>
    </div>
    
  );
}
