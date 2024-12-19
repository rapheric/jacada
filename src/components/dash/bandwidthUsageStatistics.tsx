import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const BandwidthUsageStatistics = () => {
  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7"],
    datasets: [
      {
        label: "Download (GB)",
        data: [20, 25, 30, 22, 30, 27, 22],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
      {
        label: "Upload (GB)",
        data: [5, 7, 6, 8, 4, 9, 6],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <div className="max-w-full sm:max-w-7xl mx-auto px-4 py-4">
      <h2 className="text-xl font-semibold mb-4 text-center sm:text-left text-gray-900 dark:text-white">
        Bandwidth Usage Statistics
      </h2>
      <div className="w-full h-[35vh] sm:h-[40vh] md:h-[45vh] bg-white dark:bg-gray-800 p-4 dark:text-white  rounded-lg shadow-md">
        <Bar data={data} />
      </div>
    </div>
  );
};

export default BandwidthUsageStatistics;
