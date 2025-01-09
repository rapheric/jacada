
const StepThirdSection: React.FC = () => {
  return (
    <section className="text-gray-700 dark:text-salte-200 px-6 py-12 md:px-8 lg:px-12  max-w-7xl mx-auto flex flex-col md:flex-row  items-center md:items-start gap-12">
      <div className="flex-1">
        <div className="bg-green-500 text-white text-sm font-semibold px-3 py-1 inline-block rounded-full mb-4">
          Step 3
        </div>
        <h2 className="text-gray-700 dark:text-slate-200 text-2xl md:text-4xl font-bold mb-4">
        Define access <br />  rules between groups 
        </h2>
        <p className="text-gray-700 dark:text-slate-200 text-sm md:text-lg">
        In just a few clicks, your IT admin can define how different groups of resources access each other. 
        NetBird allows limiting access to specific protocols and ports, with changes taking effect instantly across all platforms.
        </p>
      </div>
      <div className="flex-1 max-w-sm md:max-w-md lg:max-w-lg overflow-hidden">
          <img
            src="https://i.ytimg.com/vi/m1bTkVbbGaU/maxresdefault.jpg"
            alt="Single Sign-On Form Screenshot"
            className="w-full rounded-lg h-auto  object-cover"
          />
      </div>
    </section>
  );
};

export default StepThirdSection
