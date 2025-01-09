import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ThemeSwitcher from "../../../components/glo/themeswitcher/themeSwiter";
import { FaBars, FaTimes } from "react-icons/fa";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-screen  dark:bg-gray-900 bg-white text-gray-700 sticky shadow-md fixed top-0 left-0 z-50" >
    <header className="dark:bg-gray-900  dark:text-white  px-4 py-3 md:px-8 flex items-center justify-between max-w-7xl mx-auto">
      <div className="flex items-center space-x-3">
        <img
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
          alt="Jacada Logo"
          className="h-6 "
        />
        <span
          onClick={handleClick}
          className="text-lg font-bold cursor-pointer"
        >
          JACADA
        </span>
      </div>
      <div className="hidden md:flex items-center space-x-6 text-sm">
        <a href="/pricing" className="hover:underline">
          Pricing
        </a>
        <a href="/sign-up" className="hover:underline">
          Login
        </a>
        <a
          href="/sign-up"
          className="px-4 py-2 border border-white rounded-md hover:border-orange-500 transition"
        >
          Get Started
        </a>
        <ThemeSwitcher />
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMobileMenu} aria-label="Toggle Menu">
          {isMobileMenuOpen ? (
            <FaTimes className="text-xl" />
          ) : (
            <FaBars className="text-xl" />
          )}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 dark:bg-black text-white shadow-lg flex flex-col space-y-4 py-4 px-6 z-50">
          <a href="/pricing" className="hover:underline">
            Pricing
          </a>
          <a href="/sign-up" className="hover:underline">
            Login
          </a>
          <a
            href="/sign-up"
            className="px-4 py-2 border border-white rounded-md hover:border-orange-500 transition"
          >
            Get Started
          </a>
          <ThemeSwitcher />
        </div>
      )}
    </header>
    </div>
  );
};

export default Header;
