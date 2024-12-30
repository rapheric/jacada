
const StepThirdSection: React.FC = () => {
  return (
    <section className="bg-black text-white px-6 py-12 md:px-8 lg:px-12  max-w-7xl mx-auto flex flex-col md:flex-row  items-center md:items-start gap-12">
      {/* Text Section */}
      <div className="flex-1">
        {/* Step Indicator */}
        <div className="bg-orange-500 text-white text-sm font-semibold px-3 py-1 inline-block rounded-full mb-4">
          Step 3
        </div>
        {/* Title */}
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
        Define access <br />  rules between groups 
        </h2>
        {/* Description */}
        <p className="text-gray-300 text-sm md:text-lg">
        In just a few clicks, your IT admin can define how different groups of resources access each other. 
        NetBird allows limiting access to specific protocols and ports, with changes taking effect instantly across all platforms.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex-1 max-w-sm md:max-w-md lg:max-w-lg">
        {/* Replace the form with a static screenshot */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <img
            src="/path-to-your-form-screenshot.png"
            alt="Single Sign-On Form Screenshot"
            className="w-full rounded-lg"
          />
        </div>
        {/* Dropdown Icon Simulation
        <div className="bg-gray-900 mt-4 p-4 rounded-lg shadow-md flex items-center justify-between text-sm">
          <span className="text-gray-400">Connect</span>
          <span className="text-gray-400">Disconnect</span>
        </div> */}
      </div>
    </section>
  );
};

export default StepThirdSection
