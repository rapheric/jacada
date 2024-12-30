
const SearchBar = ({ placeholder }: { placeholder: string }) => (
  <div className="p-4">
    <input
      type="text"
      placeholder={placeholder}
      className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
    />
  </div>
);

const PeerTable = ({ peers }: { peers: Array<any> }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full table-auto border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2 text-left">Name</th>
          <th className="border p-2 text-left">Address</th>
          <th className="border p-2 text-left">Groups</th>
          <th className="border p-2 text-left">Last Seen</th>
          <th className="border p-2 text-left">OS</th>
          <th className="border p-2 text-left">Version</th>
          <th className="border p-2 text-left">Expiry Date</th>
        </tr>
      </thead>
      <tbody>
        {peers.map((peer, index) => (
          <tr key={index} className="border-t">
            <td className="p-2 border text-left">{peer.name}</td>
            <td className="p-2 border text-left">{peer.address}</td>
            <td className="p-2 border text-left">{peer.groups}</td>
            <td className="p-2 border text-left">{peer.lastSeen}</td>
            <td className="p-2 border text-left">{peer.os}</td>
            <td className="p-2 border text-left">{peer.version}</td>
            <td className="p-2 border text-left">{peer.expiry}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const PolicyTable = ({ policies }: { policies: Array<any> }) => (
  <div className="overflow-x-auto mt-8">
    <table className="min-w-full table-auto border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2 text-left">Name</th>
          <th className="border p-2 text-left">Active</th>
          <th className="border p-2 text-left">Sources</th>
          <th className="border p-2 text-left">Direction</th>
          <th className="border p-2 text-left">Destinations</th>
          <th className="border p-2 text-left">Protocol</th>
          <th className="border p-2 text-left">Ports</th>
          <th className="border p-2 text-left">Posture Checks</th>
        </tr>
      </thead>
      <tbody>
        {policies.map((policy, index) => (
          <tr key={index} className="border-t">
            <td className="p-2 border text-left">{policy.name}</td>
            <td className="p-2 border text-left">
              {policy.active ? (
                <span className="text-green-500">Enabled</span>
              ) : (
                <span className="text-red-500">Disabled</span>
              )}
            </td>
            <td className="p-2 border text-left">{policy.sources}</td>
            <td className="p-2 border text-left">{policy.direction}</td>
            <td className="p-2 border text-left">{policy.destinations}</td>
            <td className="p-2 border text-left">{policy.protocol}</td>
            <td className="p-2 border text-left">{policy.ports}</td>
            <td className="p-2 border text-left">{policy.postureChecks}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const VpnList = () => {
  const peers = [
    { name: "dave-ppc", address: "100.65.3.67", groups: "All +3", lastSeen: "just now", os: "Windows", version: "0.27.3" },
    { name: "Jacobs-MacBook-Pro", address: "100.65.118.60", groups: "All +4", lastSeen: "just now", os: "macOS", version: "0.25.4" },
    { name: "kate", address: "100.65.162.53", groups: "All +1", lastSeen: "just now", os: "Windows", version: "0.24.4" },
  ];

  const policies = [
    { name: "sbl", active: true, sources: "sbl", direction: "Both", destinations: "sbl", protocol: "ALL", ports: "ALL", postureChecks: "Add Posture Check" },
    { name: "OljogiVPN Rule", active: true, sources: "oljogi-vpn", direction: "Both", destinations: "oljogi-vpn", protocol: "ALL", ports: "ALL", postureChecks: "Add Posture Check" },
  ];

  return (
    <div className="w-full bg-gray-800">
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Peers</h1>
      <SearchBar placeholder="Search by name, IP, owner or group..." />
      <PeerTable peers={peers} />

      <h1 className="text-xl font-bold mt-8 mb-4">Access Control Policies</h1>
      <SearchBar placeholder="Search by name and description..." />
      <PolicyTable policies={policies} />
    </div>
    </div>
  );
};

export default VpnList;