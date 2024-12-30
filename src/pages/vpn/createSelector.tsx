import React, { useState } from 'react';

const GroupSelector: React.FC = () => {
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);
  const availableGroups = ['Admin', 'Developers', 'QA Team'];

  const toggleGroup = (group: string) => {
    setSelectedGroups((prev) =>
      prev.includes(group)
        ? prev.filter((g) => g !== group)
        : [...prev, group]
    );
  };

  return (
    <div className="mt-6">
      <label className="block text-sm font-medium mb-2">Auto-assigned groups</label>
      <div className="space-y-2">
        {availableGroups.map((group) => (
          <div key={group} className="flex items-center">
            <input
              type="checkbox"
              checked={selectedGroups.includes(group)}
              onChange={() => toggleGroup(group)}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-sm text-gray-300">{group}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupSelector;