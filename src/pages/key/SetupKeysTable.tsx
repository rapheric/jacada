
interface SetupKeysTableProps {
  data: any[];
  rowsPerPage: number;
  onEditKey: (key: any) => void;
  onDeleteKey: (key: any) => void;
}

const SetupKeysTable: React.FC<SetupKeysTableProps> = ({
  data,
  rowsPerPage,
  onEditKey,
  onDeleteKey,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-700 dark:text-slate-200 rounded-lg overflow-hidden">
      <div className="hidden sm:block overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-slate-200 dark:bg-gray-700 ">
            <tr>
              <th className="px-6 py-3">NAME & KEY</th>
              <th className="px-6 py-3">USAGE</th>
              <th className="px-6 py-3">GROUPS</th>
              <th className="px-6 py-3">EPHEMERAL</th>
              <th className="px-6 py-3">EXPIRES</th>
              <th className="px-6 py-3">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {data.slice(0, rowsPerPage).map((key, index) => (
              <tr key={index} className="border-b border-gray-700 ">
                <td className="px-6 py-4">{key.name}</td>
                <td className="px-6 py-4">{key.usage}</td>
                <td className="px-6 py-4">{key.group}</td>
                <td className="px-6 py-4">{key.ephemeral ? "Ephemeral" : "Persistent"}</td>
                <td className="px-6 py-4">{key.expires}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => onEditKey(key)}
                    className="px-2 py-1 bg-blue-500 text-white rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDeleteKey(key)}
                    className="px-2 py-1 bg-red-500 text-white rounded ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card layout for mobile screens */}
      <div className="sm:hidden space-y-4">
        {data.slice(0, rowsPerPage).map((key, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-lg p-4  bg-white dark:bg-gray-700"
          >
            <div className="mb-2">
              <span className="block font-semibold  text-slate-200 dark:text-gray-700">Name & Key:</span>
              <span>{key.name}</span>
            </div>
            <div className="mb-2">
              <span className="block font-semibold text-slate-200 dark:text-gray-700">Usage:</span>
              <span>{key.usage}</span>
            </div>
            <div className="mb-2">
              <span className="block font-semibold text-slate-200 dark:text-gray-700">Group:</span>
              <span>{key.group}</span>
            </div>
            <div className="mb-2">
              <span className="block font-semibold text-slate-200 dark:text-gray-700">Ephemeral:</span>
              <span>{key.ephemeral ? "Ephemeral" : "Persistent"}</span>
            </div>
            <div className="mb-2">
              <span className="block font-semibold text-slate-200 dark:text-gray-700">Expires:</span>
              <span>{key.expires}</span>
            </div>
            <div className="flex space-x-2 mt-4">
              <button
                onClick={() => onEditKey(key)}
                className="px-3 py-1 bg-blue-500 text-white rounded w-full"
              >
                Edit
              </button>
              <button
                onClick={() => onDeleteKey(key)}
                className="px-3 py-1 bg-red-500 text-white rounded w-full"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SetupKeysTable;
