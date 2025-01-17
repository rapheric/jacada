import { useNavigate } from "react-router-dom";
const Getstarted = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/sign-up");
  };
  return (
    <div>
      <div className="mt-8 flex flex-col md:flex-row gap-4 mb-4 max-w-7xl mx-auto flex items-center justify-center">
        <button
          onClick={handleClick}
          className="bg-green-500 hover:bg-green-600 text-white text-base font-semibold px-6 py-3 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
        >
          Get started - free
        </button>
        <button className="bg-transparent border-2 border-gray-400 hover:border-white text-gray-700 hover:text-gray-100 text-base font-semibold px-6 py-3 rounded-lg transform transition duration-300 hover:scale-105 hover:bg-gray-800 hover:shadow-lg">
          Request a demo
        </button>
      </div>
    </div>
  );
};

export default Getstarted;
