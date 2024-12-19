import vpnProtocols from "./protocolData";
import ProtocolCard from "./protocolCard";

const VPNProtocolsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          VPN Protocols
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Explore the VPN protocols integrated into our app and their features.
        </p>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vpnProtocols.map((protocol) => (
          <ProtocolCard key={protocol.name} protocol={protocol} />
        ))}
      </main>
    </div>
  );
};

export default VPNProtocolsPage;
