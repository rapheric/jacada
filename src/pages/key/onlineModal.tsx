
const OnlineModal: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 dark:text-slate-200 text-gray-700 rounded-lg shadow-lg w-11/12 max-w-md p-2 relative">
        <h2 className="text-sm text-center  font-semibold text-gray-800">
          Peers that are offline over 10 minutes will be removed automatically
        </h2>
      </div>
    </div>
  );
};

export default OnlineModal;
