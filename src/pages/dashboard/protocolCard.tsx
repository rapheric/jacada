// import VpnProtocols from "./protocolData"
interface VPNProtocol {
    name: string;
    description: string;
    features: string[];
    useCases: string[];
    integrated: boolean;
  }
const ProtocolCard: React.FC<{ protocol: VPNProtocol }> = ({ protocol }) => {
    return (
      <div
        className={`bg-white shadow-md rounded-lg p-6 border flex flex-col justify-center items-center text-center ${
          protocol.integrated ? 'border-green-500' : 'border-gray-200'
        }`}
      >
        <h2 className="text-2xl font-semibold text-blue-600">{protocol.name}</h2>
        <p className="text-gray-700 mt-2">{protocol.description}</p>
  
        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-800">Features:</h3>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            {protocol.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
  
        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-800">Use Cases:</h3>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            {protocol.useCases.map((useCase, index) => (
              <li key={index}>{useCase}</li>
            ))}
          </ul>
        </div>
  
        <div className="mt-4">
          <p className={`text-sm font-medium ${protocol.integrated ? 'text-green-600' : 'text-red-600'}`}>
            {protocol.integrated ? 'Integrated into our app' : 'Not integrated into our app'}
          </p>
        </div>
      </div>
    );
  };
  export default ProtocolCard