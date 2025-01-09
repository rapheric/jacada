import React, { useState } from "react";
import DeleteKeyDrawer from "./DeleteKeyDrawer";
import EditKeyDrawer from "./EditKeyDrawer";
import FilterBar from "./filter";
import SetupKeysTable from "./SetupKeysTable";
import CreateKeyDrawer from "./CreateKeyDrawer"; 

interface SetupKey {
  name: string;
  key: string;
  usage: string;
  group: string;
  ephemeral: boolean;
  expires: string;
  valid: boolean;
}

const SetupKeysPage: React.FC = () => {
  const [allKeys, setAllKeys] = useState<SetupKey[]>([
    {
      name: "hhhhh",
      key: "44792****",
      usage: "0 of 2 Peers",
      group: "ssss",
      ephemeral: true,
      expires: "Fri, 17 January 2025",
      valid: true,
    },
    {
      name: "ddd",
      key: "B162C****",
      usage: "0 of 4 Peers",
      group: "ddjudd",
      ephemeral: true,
      expires: "Fri, 17 January 2025",
      valid: false,
    },
    {
      name: "ccc",
      key: "B162C****",
      usage: "0 of 4 Peers",
      group: "gy",
      ephemeral: true,
      expires: "Fri, 17 January 2025",
      valid: false,
    },
    {
      name: "mmm",
      key: "B162C****",
      usage: "0 of 4 Peers",
      group: "dddd",
      ephemeral: true,
      expires: "Fri, 17 January 2025",
      valid: false,
    },
  ]);

  const [filteredKeys, setFilteredKeys] = useState<SetupKey[]>(allKeys);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [editKey, setEditKey] = useState<SetupKey | null>(null);
  const [deleteKey, setDeleteKey] = useState<SetupKey | null>(null);
  const [showCreateKeyDrawer, setShowCreateKeyDrawer] = useState<boolean>(false); 

  const handleSearch = (query: string) => {
    const filtered = allKeys.filter(
      (key) =>
        key.name.toLowerCase().includes(query.toLowerCase()) ||
        key.key.toLowerCase().includes(query.toLowerCase()) ||
        key.group.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredKeys(filtered);
  };

  const handleFilter = (filter: "all" | "valid" | "expired") => {
    if (filter === "all") {
      setFilteredKeys(allKeys);
    } else if (filter === "valid") {
      setFilteredKeys(allKeys.filter((key) => key.valid));
    } else {
      setFilteredKeys(allKeys.filter((key) => !key.valid));
    }
  };

  const handleRowsPerPage = (rows: number) => {
    setRowsPerPage(rows);
  };

  const handleEditKey = (key: SetupKey) => {
    setEditKey(key);
  };

  const handleDeleteKey = (key: SetupKey) => {
    setDeleteKey(key);
  };

  const confirmDeleteKey = () => {
    if (deleteKey) {
      const updatedKeys = allKeys.filter((key) => key !== deleteKey);
      setAllKeys(updatedKeys);
      setFilteredKeys(updatedKeys);
      setDeleteKey(null);
    }
  };

  const handleCreateKey = (newKey: SetupKey) => {
    setAllKeys((prev) => [...prev, newKey]);
    setFilteredKeys((prev) => [...prev, newKey]);
    setShowCreateKeyDrawer(false); 
  };

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen text-gray-700 dark:text-slate-200">
      <div className="max-w-8xl mx-10 px-4 sm:px-6 lg:px-8 pb-8 pt-20">
        <div className="text-left mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold">Setup Keys</h1>
          <p className="text-gray-700 dark:text-slate-200 text-sm sm:text-base">
            Setup keys are pre-authentication keys that allow you to register
            new machines in your network.
          </p>
        </div>

        <FilterBar
          onSearch={handleSearch}
          onFilter={handleFilter}
          onRowsPerPageChange={handleRowsPerPage}
        />

        <button
          onClick={() => setShowCreateKeyDrawer(true)} 
          className="w-full sm:w-auto px-4 py-2 rounded-lg bg-blue-500 text-white mt-4 sm:mt-6"
        >
          Create Setup Key
        </button>
        <div className="mt-4 sm:mt-6 overflow-x-auto">
          <SetupKeysTable
            data={filteredKeys}
            rowsPerPage={rowsPerPage}
            onEditKey={handleEditKey}
            onDeleteKey={handleDeleteKey}
          />
        </div>
      </div>
      {showCreateKeyDrawer && (
        <CreateKeyDrawer
          onClose={() => setShowCreateKeyDrawer(false)} 
          onCreate={handleCreateKey} 
        />
      )}

      {editKey && (
        <EditKeyDrawer
          keyData={editKey}
          onClose={() => setEditKey(null)}
          onSave={(updatedKey: SetupKey) => {
            const updatedKeys = allKeys.map((key) =>
              key.key === updatedKey.key ? updatedKey : key
            );
            setAllKeys(updatedKeys);
            setFilteredKeys(updatedKeys);
            setEditKey(null);
          }}
        />
      )}

      {deleteKey && (
        <DeleteKeyDrawer
          keyData={deleteKey}
          onClose={() => setDeleteKey(null)}
          onConfirm={confirmDeleteKey}
        />
      )}
    </div>
  );
};

export default SetupKeysPage;
