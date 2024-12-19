const ConnectionHistory = () => {
  const history = [
    { date: "2024-12-10", time: "14:32", duration: "2h 15m", device: "Laptop" },
    { date: "2024-12-11", time: "09:20", duration: "45m", device: "Mobile" },
    { date: "2024-12-12", time: "19:05", duration: "1h 30m", device: "Tablet" },
  ];

  return (
    <div className="px-4 py-4">
      <h2 className="text-xl font-semibold mb-4 text-center sm:text-left text-gray-800 dark:text-white">
        Connection History
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-700 p-3 text-left text-sm sm:text-base font-medium text-gray-800 dark:text-white">
                Date
              </th>
              <th className="border border-gray-300 dark:border-gray-700 p-3 text-left text-sm sm:text-base font-medium text-gray-800 dark:text-white">
                Time
              </th>
              <th className="border border-gray-300 dark:border-gray-700 p-3 text-left text-sm sm:text-base font-medium text-gray-800 dark:text-white">
                Duration
              </th>
              <th className="border border-gray-300 dark:border-gray-700 p-3 text-left text-sm sm:text-base font-medium text-gray-800 dark:text-white">
                Device
              </th>
            </tr>
          </thead>
          <tbody>
            {history.map((entry, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } dark:${index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"} hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200`}
              >
                <td className="border border-gray-300 dark:border-gray-700 p-3 text-sm sm:text-base text-gray-800 dark:text-white">
                  {entry.date}
                </td>
                <td className="border border-gray-300 dark:border-gray-700 p-3 text-sm sm:text-base text-gray-800 dark:text-white">
                  {entry.time}
                </td>
                <td className="border border-gray-300 dark:border-gray-700 p-3 text-sm sm:text-base text-gray-800 dark:text-white">
                  {entry.duration}
                </td>
                <td className="border border-gray-300 dark:border-gray-700 p-3 text-sm sm:text-base text-gray-800 dark:text-white">
                  {entry.device}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ConnectionHistory;
