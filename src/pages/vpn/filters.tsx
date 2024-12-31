import React from "react";
// import { FiArrowUpCircle } from "react-icons/fi";
import { RiExpandUpDownLine } from "react-icons/ri";

interface FiltersProps {
  options: string[];
}

const Filters: React.FC<FiltersProps> = ({ options }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:space-x-4 items-start sm:items-center space-y-4 sm:space-y-0">
      {options.map((option, index) => (
        <div key={index} className="relative w-full sm:w-auto">
          <select
            className="bg-gray-700 text-white py-2 pl-4 pr-10 rounded-lg border border-gray-600 appearance-none w-full"
          >
            <option value="">{option}</option>
          </select>
          <RiExpandUpDownLine size={24} className="text-slat2-500" />
        </div>
      ))}
    </div>
  );
};

export default Filters;
