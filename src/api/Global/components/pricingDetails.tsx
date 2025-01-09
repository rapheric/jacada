import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const plans = [
  {
    id: "1",
    title: "1 Month",
    price: "$12.95",
    save: "0%",
    details: "30-day money-back guarantee",
    fullDetails:
      "This is a one-month plan with no savings. Billed $12.95 monthly. Includes a 30-day money-back guarantee.",
  },
  {
    id: "2",
    title: "2 Years + 4 Months FREE",
    price: "$4.99",
    save: "61%",
    details: "Billed $139.72 for 28 months, then renews yearly",
    fullDetails:
      "This plan includes 2 years and 4 months free. Save 61%. Billed upfront. Includes a 30-day money-back guarantee.",
  },
  {
    id: "3",
    title: "12 Months + 3 Months FREE",
    price: "$6.67",
    save: "48%",
    details: "Billed $99.95 for 15 months, then renews yearly",
    fullDetails:
      "This plan includes 12 months and 3 months free. Save 48%. Billed upfront. Includes a 30-day money-back guarantee.",
  },
];

const PlanDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const plan = plans.find((plan) => plan.id === id);

  if (!plan) {
    return <div>Plan not found!</div>;
  }

  return (
    <div className="p-6 max-w-5xl mx-auto bg-slate-200 dark:bg-gray-800  rounded-lg shadow-md h-[50vh] my-16">
      <h1 className="text-2xl font-bold mb-4 dark:text-gray-200 ">{plan.title}</h1>
      <p className="text-lg text-gray-900 dark:text-gray-200 mb-2">Price: {plan.price}/mo</p>
      <p className="text-sm text-gray-500 dark:text-gray-200  mb-4">SAVE {plan.save}</p>
      <p className="text-gray-700  dark:text-gray-200  mb-6">{plan.fullDetails}</p>
      <button
        onClick={() => navigate(-1)}
        className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Go Back
      </button>
    </div>
  );
};

export default PlanDetails;
