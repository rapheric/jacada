const DataUsageMeter = () => {
  const totalData = 100; 
  const usedData = 60; 

  const usagePercentage = (usedData / totalData) * 100;

  return (
    <div className="w-full max-w-xs mx-auto px-4 py-2">
      <h2 className="text-xl font-semibold mb-2 text-center sm:text-left text-gray-800 dark:text-white">
        Data Usage Meter
      </h2>
      <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-4 sm:h-6">
        <div
          className="bg-green-500 dark:bg-green-400 h-4 sm:h-6 rounded-full text-white text-xs sm:text-sm text-center"
          style={{ width: `${usagePercentage}%` }}
        >
          {`${usedData}GB / ${totalData}GB`}
        </div>
      </div>
    </div>
  );
};

export default DataUsageMeter;
