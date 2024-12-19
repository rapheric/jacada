import BandwidthUsageStatistics from "./bandwidthUsageStatistics";
import ConnectionHistory from "./connectionHistory";
import DataUsageMeter from "./dataUsageMeter";

const ActivityLogs = () => {
  return (
    <div className="p-4 sm:p-6 bg-white dark:bg-gray-900 shadow-md rounded-lg space-y-6 sm:space-y-8">
      <h1 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-white text-center sm:text-left">
        Activity & Logs
      </h1>
      <div className="space-y-6 sm:space-y-8">
        <div className="w-full sm:w-3/4 mx-auto">
          <BandwidthUsageStatistics />
        </div>
        <div className="w-full sm:w-4/5 mx-auto">
          <ConnectionHistory />
        </div>
        <div className="w-full sm:w-2/3 mx-auto">
          <DataUsageMeter />
        </div>
      </div>
    </div>
  );
};

export default ActivityLogs;
