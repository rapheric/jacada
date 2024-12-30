import React from "react";
import { FiArrowUpCircle, FiSearch } from "react-icons/fi";
import { FaApple, FaLinux, FaWindows, FaLocationArrow } from "react-icons/fa";
import Filters from "./filters";
import SearchBar from "./searchBar";

const dummyData = [
  {
    key: "1",
    name: "dave-ppc",
    address: "dave-ppc.netbird.selfhosted",
    groups: ["All", "+ 3"],
    lastSeen: "just now",
    os: "Windows",
    version: [<FaLocationArrow />, " 0.27.3", <FiArrowUpCircle />],
    Expiration: "expiration disc",
  },
  {
    key: "2",
    name: "Jacobs-MacBook-Pro.local",
    address: "jacobs-macbook-pro.netbird.selfhosted",
    groups: ["All", "+ 4"],
    lastSeen: "just now",
    os: "MacOS",
    version: [<FaLocationArrow />, " 0.27.3", <FiArrowUpCircle />],
    Expiration: "expiration disc",
  },
  {
    key: "3",
    name: "kate",
    address: "kate.netbird.selfhosted",
    groups: ["All", "+ 1"],
    lastSeen: "just now",
    os: "Linux",
    version: [<FaLocationArrow />, " 0.27.3", <FiArrowUpCircle />],
    Expiration: "expiration disc",
  },
];

type OS = "Windows" | "MacOS" | "Linux";

const PeersPage: React.FC = () => {
  const renderOSIcon = (os: OS): JSX.Element | null => {
    const osIcons: Record<OS, JSX.Element> = {
      Windows: <FaWindows size={18} className="text-blue-500" />,
      MacOS: <FaApple size={18} className="text-gray-400" />,
      Linux: <FaLinux size={18} className="text-orange-500" />,
    };
    return osIcons[os] || null;
  };

  return (
    <div className="p-4 max-w-7xl mx-auto bg-gray-800 w-full text-white mt-32 dark:bg-gray-900">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-2 items-center mb-6">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <FiSearch size={18} className="text-gray-400" />
          <SearchBar placeholder="Search by name, IP, owner or group..." />
        </div>
        <Filters options={["Online", "10 rows per page", "All Groups", "Rewind"]} />
      </div>

      <table className="w-full table-auto border-collapse bg-gray-800 text-slate-200">
        <thead className="bg-gray-700 text-xs uppercase text-gray-400">
          <tr>
            <th className="px-4 py-3 text-left">Name</th>
            <th className="px-4 py-3 text-left">Address</th>
            <th className="px-4 py-3 text-left">Groups</th>
            <th className="px-4 py-3 text-left">Last Seen</th>
            <th className="px-4 py-3 text-left">OS</th>
            <th className="px-4 py-3 text-left">Version</th>
            <th className="px-4 py-3 text-left">Expiration</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((peer) => (
            <tr
              key={peer.key}
              className="border-b border-gray-700 hover:bg-gray-700 transition-none"
            >
              <td className="px-4 py-3">{peer.name}</td>
              <td className="px-4 py-3">{peer.address}</td>
              <td className="px-4 py-3">
                <div className="flex flex-wrap gap-2">
                  {peer.groups.map((group, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-white py-1 px-3 rounded-md text-xs"
                    >
                      {group}
                    </span>
                  ))}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <FiArrowUpCircle className="text-gray-400" />
                  {peer.lastSeen}
                </div>
              </td>
              <td className="px-4 py-3">{renderOSIcon(peer.os as OS)}</td>
              <td className="px-4 py-3 text-orange-400">
                <div className="flex items-center gap-2">
                  {peer.version.map((item, index) => (
                    <span key={index}>{item}</span>
                  ))}
                </div>
              </td>
              <td className="px-4 py-3">{peer.Expiration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PeersPage;
