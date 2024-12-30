import React from "react";

const PricingUI: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-6">Supercharge your network security</h1>
      <p className="text-center text-gray-300 mb-10">
        Choose a plan that fits your needs and start securing your infrastructure. <br />
        No credit card is required.
      </p>
      <a
        href="#pricing-calculator"
        className="text-orange-400 underline text-lg mb-16"
      >
        Pricing Calculator
      </a>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {/* Free Plan */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 w-80 flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4">Free</h2>
          <p className="text-center text-gray-400 mb-6">
            For individuals or small teams looking for an easy-to-use and secure connectivity.
          </p>
          <p className="text-4xl font-bold mb-2">$0</p>
          <p className="text-sm text-gray-400 mb-6">user / month</p>
          <ul className="text-gray-400 mb-6">
            <li>👤 up to 5 users</li>
            <li>💻 100 machines</li>
          </ul>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
            Get started
          </button>
        </div>

        {/* Team Plan */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 w-80 flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4">Team</h2>
          <p className="text-center text-gray-400 mb-6">
            For teams and organizations looking to replace legacy VPNs for secure remote access and site-to-site connectivity.
          </p>
          <p className="text-4xl font-bold mb-2">$5</p>
          <p className="text-sm text-gray-400 mb-6">user / month</p>
          <ul className="text-gray-400 mb-6">
            <li>👤 unlimited users</li>
            <li>💻 100 machines + 10 per user</li>
          </ul>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
            Try for free
          </button>
        </div>

        {/* Business Plan */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 w-80 flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4">Business</h2>
          <p className="text-center text-gray-400 mb-6">
            For organizations looking to strengthen their network security with the modern Zero Trust approach.
          </p>
          <p className="text-4xl font-bold mb-2">$12</p>
          <p className="text-sm text-gray-400 mb-6">user / month</p>
          <ul className="text-gray-400 mb-6">
            <li>👤 unlimited users</li>
            <li>💻 100 machines + 10 per user</li>
          </ul>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
            Try for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingUI;
