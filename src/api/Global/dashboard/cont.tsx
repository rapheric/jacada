
import React, { useState, useEffect } from 'react';

interface AccessControlRule {
  id: string;
  name: string;
  description: string;
  status: string;
}

const AccessCo: React.FC = () => {
    const [rules, setRules] = useState<AccessControlRule[]>([]);

    useEffect(() => {
        const dummyRules: AccessControlRule[] = [
            { id: '1', name: 'Rule 1', description: 'Access rule for users', status: 'active' },
            { id: '2', name: 'Rule 2', description: 'Access rule for admins', status: 'inactive' },
            { id: '3', name: 'Rule 3', description: 'Access rule for guests', status: 'active' },
            { id: '4', name: 'Rule 4', description: 'Access rule for developers', status: 'inactive' },
        ];
        setRules(dummyRules);
    }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center py-4">
        <h1 className="text-3xl font-bold text-gray-800">Access Control Rules</h1>
      </header>
      <main className="container mx-auto mt-6">
        {rules.length > 0 ? (
          <div className="bg-white shadow-md rounded-md overflow-hidden">
            <table className="min-w-full text-sm text-left text-gray-700">
              <thead className="bg-gray-200 text-gray-800">
                <tr>
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Description</th>
                  <th className="px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {rules.map((rule) => (
                  <tr key={rule.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border-t border-gray-200">{rule.id}</td>
                    <td className="px-4 py-2 border-t border-gray-200">{rule.name}</td>
                    <td className="px-4 py-2 border-t border-gray-200">{rule.description}</td>
                    <td className="px-4 py-2 border-t border-gray-200">
                      <span
                        className={`px-2 py-1 rounded-md text-white ${
                          rule.status === 'active' ? 'bg-green-500' : 'bg-red-500'
                        }`}
                      >
                        {rule.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-600">No access control rules found.</p>
        )}
      </main>
    </div>
  );
};

export default AccessCo;
