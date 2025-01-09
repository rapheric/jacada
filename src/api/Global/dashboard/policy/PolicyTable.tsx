import React from "react";

interface Policy {
  key: string;
  name: string;
  active: boolean;
  sources: string;
  direction: string;
  destinations: string;
  protocol: string;
  ports: string;
  posture: string;
}

interface Props {
  policies: Policy[];
  searchQuery: string;
  showTenRows: boolean;
  handleEditPolicy: (policy: Policy) => void;
  handleDeletePolicy: (policy: Policy) => void;
  isDarkMode: boolean;
}

const PolicyTable: React.FC<Props> = ({
  policies,
  searchQuery,
  showTenRows,
  handleEditPolicy,
  handleDeletePolicy,
  isDarkMode,
}) => {
  const filteredPolicies = policies.filter((policy) =>
    policy.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedPolicies = showTenRows ? filteredPolicies.slice(0, 10) : filteredPolicies;

  return (
    <div
      className="p-4 rounded-lg 
         dark:bg-gray-900 dark:text-slate-200 bg-white text-gray-700"
    >
      <div className="overflow-x-auto">
        <table className="w-full border-collapse table-auto text-sm">
          <thead>
            <tr>
              <th className="border-b p-2 text-left">Name</th>
              <th className="border-b p-2 text-left">Active</th>
              <th className="border-b p-2 text-left hidden md:table-cell">Sources</th>
              <th className="border-b p-2 text-left">Direction</th>
              <th className="border-b p-2 text-left hidden lg:table-cell">Destinations</th>
              <th className="border-b p-2 text-left hidden md:table-cell">Protocol</th>
              <th className="border-b p-2 text-left hidden lg:table-cell">Ports</th>
              <th className="border-b p-2 text-left hidden lg:table-cell">Posture</th>
              <th className="border-b p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedPolicies.map((policy) => (
              <tr key={policy.key} className="">
                <td className="border-b p-2">{policy.name}</td>
                <td className="border-b p-2">
                  <span
                    className={`inline-block w-4 h-4 rounded-full ${
                      policy.active ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></span>
                </td>
                <td className="border-b p-2 hidden md:table-cell">{policy.sources}</td>
                <td className="border-b p-2">{policy.direction === "Inbound" ? "← Inbound" : "→ Outbound"}</td>
                <td className="border-b p-2 hidden lg:table-cell">{policy.destinations}</td>
                <td className="border-b p-2 hidden md:table-cell">{policy.protocol}</td>
                <td className="border-b p-2 hidden lg:table-cell">{policy.ports}</td>
                <td className="border-b p-2 hidden lg:table-cell">{policy.posture}</td>
                <td className="border-b p-2">
                  <div className="flex space-x-2">
                    <button
                      className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                      onClick={() => handleEditPolicy(policy)}
                    >
                      Edit
                    </button>
                    <button
                      className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                      onClick={() => handleDeletePolicy(policy)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showTenRows && filteredPolicies.length > 10 && (
        <div className="flex justify-center mt-4">
          <button
            className={`${
              isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"
            } text-sm font-medium px-4 py-2 rounded-md`}
            onClick={() => alert("Show more functionality can be added")}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default PolicyTable;
