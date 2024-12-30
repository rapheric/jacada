import React from 'react';

const PlansAndBilling: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">NetBird</h1>
          <nav>
            <a href="/settings" className="text-white hover:underline">Settings</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-6">Plans and Billing</h2>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Current Plan</h3>
          <div className="flex items-center justify-between border-b pb-4 mb-4">
            <div>
              <p className="text-lg font-medium">Pro Plan</p>
              <p className="text-gray-600">$29.99 / month</p>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Change Plan
            </button>
          </div>
          <h3 className="text-xl font-bold mb-4">Payment Details</h3>
          <div className="flex items-center justify-between">
            <p className="text-gray-600">Visa ending in 1234</p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Update Payment Method
            </button>
          </div>
        </section>

        <section className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Billing History</h3>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b py-2">Date</th>
                <th className="border-b py-2">Description</th>
                <th className="border-b py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">2024-11-01</td>
                <td className="py-2">Monthly subscription</td>
                <td className="py-2">$29.99</td>
              </tr>
              <tr>
                <td className="py-2">2024-10-01</td>
                <td className="py-2">Monthly subscription</td>
                <td className="py-2">$29.99</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default PlansAndBilling;
