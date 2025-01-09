import React from "react";
import { useNavigate } from "react-router-dom";

interface PricingCardProps {
  id: string;
  title: string;
  price: string;
  save: string;
  details: string;
  buttonText: string;
  isPopular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  id,
  title,
  price,
  save,
  details,
  buttonText,
  isPopular = false,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/plan/${id}`);
  };

  return (
    <div
      className={`flex flex-col items-center  p-6 rounded-lg shadow-md ${
        isPopular ? "bg-green-100 border-green-500 dark:bg-green-400 border-2" : "bg-white dark:bg-gray-800"
      }`}
    >
      {isPopular && (
        <div className="text-sm font-bold text-green-700  mb-2">
          MOST POPULAR
        </div>
      )}
      <h3 className="text-lg text-gray-700  dark:text-slate-200 font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-500 text-gray-700  dark:text-slate-200 mb-1">SAVE {save}</p>
      <div className="text-4xl font-bold text-gray-900  dark:text-slate-200 mb-1">
        {price}
        <span className="text-lg  text-gray-700  dark:text-slate-200 font-normal">/mo</span>
      </div>
      <p className="text-sm text-gray-700  dark:text-slate-200  mb-4">{details}</p>
      <button
        onClick={handleClick}
        className={`py-2 px-4 rounded-md font-medium ${
          isPopular
            ? "bg-green-600 text-white hover:bg-green-700"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard;
