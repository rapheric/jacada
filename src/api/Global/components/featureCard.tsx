import React from "react";

interface FeatureCardProps {
  title: string;
  icon: React.ReactNode;
  features: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, icon, features }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-2xl transform transition duration-300 hover:scale-105">
      <div className="flex items-center mb-4">
        <div className="text-3xl mr-4">{icon}</div>
        <h3 className="font-semibold text-xl">{title}</h3>
      </div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-slate-200">
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureCard;
