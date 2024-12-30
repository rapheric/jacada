// import React from "react";

// const Header: React.FC = () => {
//   return (
//     <header className="bg-black text-white px-4 py-3 md:px-8 flex items-center justify-between">
//       {/* Logo Section */}
//       <div className="flex items-center space-x-3">
//         <img
//           src="/path/to/logo.png" // Replace with your logo path
//           alt="NetBird Logo"
//           className="h-6"
//         />
//         <span className="text-lg font-bold">netbird</span>
//       </div>

//       {/* Navigation Section */}
//       <nav className="hidden md:flex items-center space-x-6 text-sm">
//         <button className="px-3 py-1 rounded-md bg-transparent hover:bg-gray-800 transition">
//           CONNECT
//         </button>
//         <button className="px-3 py-1 rounded-md bg-transparent hover:bg-gray-800 transition">
//           SECURE
//         </button>
//         <a
//           href="https://github.com" // Replace with the actual GitHub link
//           target="_blank"
//           rel="noopener noreferrer"
//           className="px-3 py-1 border border-gray-600 flex items-center rounded-md text-sm hover:border-orange-500 transition"
//         >
//           <svg
//             className="h-4 w-4 mr-1"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="currentColor"
//             viewBox="0 0 16 16"
//           >
//             <path d="...GitHub logo SVG path..." />
//           </svg>
//           OPEN SOURCE <span className="ml-1 text-orange-500">11.6k</span>
//         </a>
//       </nav>

//       {/* Right Section */}
//       <div className="hidden md:flex items-center space-x-6 text-sm">
//         <div className="relative group">
//           <button className="px-3 py-1 rounded-md bg-transparent hover:bg-gray-800 transition">
//             Use Cases
//           </button>
//           <div className="absolute left-0 hidden group-hover:block bg-gray-900 text-white shadow-lg py-2 rounded-md mt-2">
//             <a href="#" className="block px-4 py-2 hover:bg-gray-800">
//               Option 1
//             </a>
//             <a href="#" className="block px-4 py-2 hover:bg-gray-800">
//               Option 2
//             </a>
//           </div>
//         </div>
//         <a href="#docs" className="hover:underline">
//           Docs
//         </a>
//         <a href="#learn" className="hover:underline">
//           Learn
//         </a>
//         <a href="#pricing" className="hover:underline">
//           Pricing
//         </a>
//         <a href="#install" className="hover:underline">
//           Install
//         </a>
//         <a href="#login" className="hover:underline">
//           Login
//         </a>
//         <a
//           href="#get-started"
//           className="px-4 py-2 border border-white rounded-md hover:border-orange-500 transition"
//         >
//           Get Started
//         </a>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white px-4 py-3 md:px-8 flex items-center justify-between max-w-7xl mx-auto">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <img
          src="/path/to/logo.png" // Replace with your logo path
          alt="Jacada Logo"
          className="h-6"
        />
        <span className="text-lg font-bold">netbird</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-6 text-sm">
        <a href="/pricing" className="hover:underline">
          Pricing
        </a>
        <a href="#login" className="hover:underline">
          Login
        </a>
        <a
          href="#get-started"
          className="px-4 py-2 border border-white rounded-md hover:border-orange-500 transition"
        >
          Get Started
        </a>
      </div>
    </header>
  );
};

export default Header;
