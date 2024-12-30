import React from "react";
import { FiSearch } from "react-icons/fi"; // Import search icon

interface SearchBarProps {
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  return (
    <div className="flex items-center bg-gray-700 text-white rounded-lg border border-gray-600 focus-within:ring-2 focus-within:ring-orange-500 w-full sm:w-auto px-3 py-2">
      <FiSearch className="text-gray-400 mr-3" size={20} />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-transparent text-sm p-2 focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
