import React from "react";
import { FiArrowRight } from "react-icons/fi";


const GroupModalTwo: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 dark:text-slate-200 text-gray-700 rounded-lg shadow-lg w-9/12 max-w-sm p-6 relative">
        <h2 className="text-xl  text-center font-semibold text-gray-800 mb-2">
          Auto-assigned Groups
        </h2>
        <div className="grid grid-cols-3 gap-2 items-center">
          <div className="shadow-md rounded bg-slate-100 p-1 text-center text-gray-800">
            Group 1
          </div>
          <FiArrowRight className="text-gray-500 text-xl mx-auto" />
          <div className="shadow-md rounded bg-slate-100 p-1 text-center text-gray-800">
            0 peer(s)
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupModalTwo;
