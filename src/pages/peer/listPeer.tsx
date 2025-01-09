import { useState } from "react";
import { FiSearch, FiMoreHorizontal, FiArrowLeft, FiArrowRight } from "react-icons/fi";

const PeerTable = ({ peers, onEdit }: { peers: any[]; onEdit: (id: number) => void }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<"online" | "all">("all");
  const [groupFilter, setGroupFilter] = useState("All Groups");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);


  const filteredPeers = peers
    .filter((peer) => {
      if (filter === "online") {
        return peer.lastSeen.toLowerCase().includes("minute");
      }
      return true; 
    })
    .filter((peer) => {
      if (groupFilter !== "All Groups") {
        return peer.group === groupFilter;
      }
      return true;
    })
    .filter((peer) =>
      `${peer.name} ${peer.address} ${peer.ip} ${peer.group}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );

  const paginatedPeers = filteredPeers.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="dark:bg-gray-900  bg-white rounded-md p-4">
      <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 mb-4">
        <div className="flex items-center shadow-lg bg-slate-100 dark:bg-gray-700 rounded-md px-3 py-2 w-full max-w-sm mb-4 sm:mb-0">
          <FiSearch className="dark:text-slate-200 text-gray-800 mr-2" />
          <input
            type="text"
            placeholder="Search by name, IP, owner or group..."
            className="bg-transparent text-gray-500 dark:text-slate-200 outline-none text-sm w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap items-center space-x-2">
          <button
            className={`px-4 py-2 rounded-md text-slate-200 ${filter === "online" ? "bg-gray-500" : "bg-gray-700"}`}
            onClick={() => setFilter("online")}
          >
            Online
          </button>
          <button
            className={`px-4 py-2 rounded-md text-slate-200 ${filter === "all" ? "bg-gray-500" : "bg-gray-700"}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className="px-4 py-2 bg-gray-700 text-slate-200 rounded-md"
            onClick={() => setRowsPerPage(10)}
          >
            10 rows per page
          </button>
          <button
            className={`px-4 py-2 rounded-md text-slate-200 ${groupFilter === "All Groups" ? "bg-gray-500" : "bg-gray-700"}`}
            onClick={() => setGroupFilter("All Groups")}
          >
            All Groups
          </button>
        </div>
      </div>

      <table className="table-auto w-full text-left bg-white dark:bg-gray-900 dark:text-slate-200 text-gray-700">
        <thead>
          <tr className="">
            <th className="py-2">Name</th>
            <th>Address</th>
            <th>IP</th>
            <th>Groups</th>
            <th>Last Seen</th>
            <th>OS</th>
            <th>Version</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedPeers.map((peer) => (
            <tr key={peer.id} className="border-t border-gray-300 table-auto">
              <td className="py-2">{peer.name}</td>
              <td  className="py-2"> 
                {peer.ip}
              </td>
              <td>{peer.address}</td>
              <td>
                <button className="px-2 py-1 bg-white dark:bg-gray-700 rounded-md">{peer.group}</button>
              </td>
              <td>{peer.lastSeen}</td>
              <td>
                <span className="">{peer.os}</span>
              </td>
              <td>{peer.version}</td>
              <td>
                <button
                  className="text-gray-700 hover:text-green-400"
                  onClick={() => onEdit(peer.id)}
                >
                  <FiMoreHorizontal />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-700 dark:text-slate-200">
          Showing {paginatedPeers.length} of {filteredPeers.length} peers
        </p>
        <div className="flex items-center space-x-2">
          <button
            className="px-2 py-1 rounded-md"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
             <FiArrowLeft size={24} />
          </button>
          <button
            className="px-2 py-1 rounded-md"
            disabled={currentPage === Math.ceil(filteredPeers.length / rowsPerPage)}
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(prev + 1, Math.ceil(filteredPeers.length / rowsPerPage))
              )
            }
          >
           <FiArrowRight size={24}  />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PeerTable;
