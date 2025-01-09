import React, { useState } from "react";

interface FilterBarProps {
  onSearch: (query: string) => void;
  onFilter: (filter: "all" | "valid" | "expired") => void;
  onRowsPerPageChange: (rows: number) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  onSearch,
  onFilter,
  onRowsPerPageChange,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [active, setActive] = useState<"valid" | "all" | "expired">("valid");

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  const handleAllClick = () => {
    setActive("all");
    onFilter("all");
  };

  const handleValidClick = () => {
    setActive("valid");
    onFilter("valid");
  };

  const handleExpiredClick = () => {
    setActive("expired");
    onFilter("expired");
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
      <div className="relative border dark:border-none rounded-md">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInput}
          placeholder="Search by name, type, or group..."
          className="dark:bg-gray-800 bg-white dark:text-slate-200  text-gray-700 px-4 py-2 rounded-lg w-72 placeholder-gray-500 focus:outline-none focus:ring focus:ring-orange-500"
        />
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={handleAllClick}
          disabled={active === "all"} 
          className={`px-4 py-2 rounded-lg  text-white ${
            active === "all" 
            ? "bg-gray-500 cursor-not-allowed" 
            : "bg-blue-500 cursor-pointer"
          }`}
        >
          All
        </button>
        <button
          onClick={handleValidClick}
          disabled={active === "valid"} 
          className={`px-4 py-2 rounded-lg text-white ${
            active === "valid"
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-green-400 cursor-pointer"
          }`}
        >
          Valid
        </button>

        <button
          onClick={handleExpiredClick}
          disabled={active === "valid"}
          className={`px-4 py-2 rounded-lg  text-white ${
            active === "expired" 
            ? "bg-gray-500 cursor-not-allowed" 
            : "bg-red-500 cursor-pointer"
          }`}
        >
          Expired
        </button>
      </div>
      <select
        onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
        className="dark:bg-gray-800 dark:text-slate-200 bg-white  border dark:border-none  px-4 py-2 rounded-lg"
      >
        <option value={5}>5 rows per page</option>
        <option value={7}>7 rows per page</option>
        <option value={10}>10 rows per page</option>
      </select>
    </div>
  );
};

export default FilterBar;
