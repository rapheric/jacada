

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
}

const PolicyTable: React.FC<Props> = ({
  policies,
  searchQuery,
  showTenRows,
  handleEditPolicy,
  handleDeletePolicy,
}) => {
  const filteredPolicies = policies.filter((policy) =>
    policy.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedPolicies = showTenRows ? filteredPolicies.slice(0, 10) : filteredPolicies;

  return (
    <div className="overflow-x-auto bg-gray-900 rounded-lg p-4">
      <table className="min-w-full bg-gray-900 text-white">
        <thead>
          <tr>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Active</th>
            <th className="p-2 text-left">Sources</th>
            <th className="p-2 text-left">Direction</th>
            <th className="p-2 text-left">Destinations</th>
            <th className="p-2 text-left">Protocol</th>
            <th className="p-2 text-left">Ports</th>
            <th className="p-2 text-left">Posture Choices</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedPolicies.map((policy) => (
            <tr key={policy.key} className="border-t border-gray-600">
              <td className="p-3">{policy.name}</td>
              <td className="p-2">
                <span className={policy.active ? "text-green-400" : "text-red-500"}>
                  {policy.active ? "Yes" : "No"}
                </span>
              </td>
              <td className="p-2">{policy.sources}</td>
              <td className="p-2">{policy.direction === "Inbound" ? "← Inbound" : "→ Outbound"}</td>
              <td className="p-2">{policy.destinations}</td>
              <td className="p-2">{policy.protocol}</td>
              <td className="p-2">{policy.ports}</td>
              <td className="p-2">{policy.posture}</td>
              <td className="p-2 flex space-x-2">
                <button
                  className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-500"
                  onClick={() => handleEditPolicy(policy)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500"
                  onClick={() => handleDeletePolicy(policy)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showTenRows && filteredPolicies.length > 10 && (
        <div className="flex justify-center mt-4">
          <button
            className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-500"
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
