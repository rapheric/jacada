const StepTwoSection: React.FC = () => {
  return (
    <section className="dark:text-white text-gray-700 px-6 py-12 md:px-8 lg:px-12  max-w-7xl mx-auto flex flex-col md:flex-row  items-center md:items-start gap-12">
      <div className="flex-1">
        <div className="bg-green-500 text-white text-sm font-semibold px-3 py-1 inline-block rounded-full mb-4">
          Step 2
        </div>
        <h2 className="text-gray-700 dark:text-gray-300 text-2xl md:text-4xl font-bold mb-4">
          Group your team <br /> and machines
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm md:text-lg">
          NetBird lets your IT admin easily create and assign groups to
          resources and team members using an intuitive cloud panel. NetBird
          also syncs existing groups from identity providers like Google, Okta,
          or Microsoft.
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

export default StepTwoSection;
