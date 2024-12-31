import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaArrowsAltH, FaTimes } from "react-icons/fa";

interface Props {
  selectedPolicy: any;
  editDrawerVisible: boolean;
  setEditDrawerVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setPolicies: React.Dispatch<React.SetStateAction<any[]>>;
}

const PolicyDrawer: React.FC<Props> = ({
  selectedPolicy,
  editDrawerVisible,
  setEditDrawerVisible,
  setPolicies,
}) => {
  const [name, setName] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [posture, setPosture] = useState("Allow");
  const [protocol, setProtocol] = useState("ALL");
  const [ports, setPorts] = useState<string[]>([]);
  const [tags, setTags] = useState<{ source: string; direction: string; destination: string }[]>([]);
  const [sourceInput, setSourceInput] = useState("");
  const [destinationInput, setDestinationInput] = useState("");
  const [direction, setDirection] = useState("both");

  useEffect(() => {
    if (selectedPolicy) {
      setName(selectedPolicy.name || "");
      setIsActive(selectedPolicy.active || false);
      setPosture(selectedPolicy.posture || "Allow");
      setProtocol(selectedPolicy.protocol || "ALL");
      setPorts(selectedPolicy.ports || []);
      setTags(selectedPolicy.tags || []);
    } else {
      resetForm();
    }
  }, [selectedPolicy]);

  const resetForm = () => {
    setName("");
    setIsActive(false);
    setPosture("Allow");
    setProtocol("TCP");
    setPorts([]);
    setTags([]);
    setSourceInput("");
    setDestinationInput("");
    setDirection("both");
  };

  const handleAddTag = () => {
    if (sourceInput.trim() && destinationInput.trim()) {
      const newTag = {
        source: sourceInput.trim(),
        direction,
        destination: destinationInput.trim(),
      };
      setTags([...tags, newTag]);
      setSourceInput("");
      setDestinationInput("");
      setDirection("both");
    }
  };

  const handleRemoveTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    if (!name || !ports.length) {
      alert("Please fill in all required fields.");
      return;
    }
    const newPolicy = {
      name,
      active: isActive,
      posture,
      protocol,
      ports,
      tags,
    };
    if (selectedPolicy) {
      setPolicies((prev) =>
        prev.map((policy) =>
          policy.key === selectedPolicy.key ? { ...policy, ...newPolicy } : policy
        )
      );
    } else {
      setPolicies((prev) => [
        ...prev,
        { ...newPolicy, key: Date.now().toString() },
      ]);
    }
    setEditDrawerVisible(false);
    resetForm();
  };

  const handleAddPort = (port: string) => {
    if (port.trim() && !ports.includes(port.trim())) {
      setPorts([...ports, port.trim()]);
    }
  };

  const handleRemovePort = (port: string) => {
    setPorts(ports.filter((p) => p !== port));
  };

  return (
    <div
      className={`fixed inset-y-0 right-0 w-1/3 bg-gray-800 flex flex-col transition-all duration-300 ${
        editDrawerVisible ? "translate-x-0" : "translate-x-full"
      } shadow-lg`}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <h2 className="text-white text-lg font-bold">
          {selectedPolicy ? "Edit Policy" : "Create Policy"}
        </h2>
        <button
          onClick={() => setEditDrawerVisible(false)}
          className="text-gray-300 hover:text-red-500"
        >
          <FaTimes size={20} />
        </button>
      </div>

      <div className="flex-1 p-4 space-y-6">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Policy Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter policy name"
            className="w-full p-2 bg-gray-900 text-white rounded shadow border border-gray-600 placeholder-gray-500 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <label className="text-sm text-gray-400">Active</label>
            <input
              type="checkbox"
              checked={isActive}
              onChange={(e) => setIsActive(e.target.checked)}
              className="h-4 w-4"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Posture</label>
            <select
              value={posture}
              onChange={(e) => setPosture(e.target.value)}
              className="w-full p-2 bg-gray-900 text-white rounded shadow border border-gray-600 focus:ring-2 focus:ring-blue-500"
            >
              <option value="Allow">Allow</option>
              <option value="Deny">Deny</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Protocol</label>
            <select
              value={protocol}
              onChange={(e) => setProtocol(e.target.value)}
              className="w-full p-2 bg-gray-900 text-white rounded shadow border border-gray-600 focus:ring-2 focus:ring-blue-500"
            >
              <option value="ALL">ALL</option>
              <option value="TCP">TCP</option>
              <option value="UDP">UDP</option>
              <option value="ICMP">ICMP</option>
            </select>
          </div>
        </div>

        {/* Ports input with tags */}
        <div>
          <label className="block text-sm text-gray-400 mb-1">Ports</label>
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value=""
              onChange={(e) => handleAddPort(e.target.value)}
              placeholder="Enter port"
              className="w-full p-2 bg-gray-900 text-black rounded shadow border border-gray-600 focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={(e) => handleAddPort((e.target as HTMLButtonElement).value)}
              className="bg-orange-500 text-white px-4 py-2 rounded"
            >
              Add
            </button>
          </div>
          <div>
            {ports.map((port, index) => (
              <div
                key={index}
                className="flex items-center gap-2 mb-2"
              >
                <span className="text-gray-300">{port}</span>
                <button
                  onClick={() => handleRemovePort(port)}
                  className="text-red-500 hover:text-red-700"
                >
                  x
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Source, Direction, Destination Inputs */}
        <div className="flex gap-4">
          <div className="w-full">
            <h3 className="text-gray-300 font-medium mb-2">Source</h3>
            <input
              type="text"
              value={sourceInput}
              onChange={(e) => setSourceInput(e.target.value)}
              placeholder="Add source"
              className="w-full p-2 bg-gray-900 text-white rounded shadow border border-gray-600"
            />
          </div>

          <div className="w-full">
            <label className="block text-sm text-gray-400 mb-1">Direction</label>
            <select
              value={direction}
              onChange={(e) => setDirection(e.target.value)}
              className="w-full p-2 bg-green-500 text-white rounded shadow"
            >
              <option value="right">
                <FaArrowRight size={20} />
              </option>
              <option value="left">
                <FaArrowLeft className="text-white" size={20} />
              </option>
              <option value="both">
                <FaArrowsAltH className="text-white" size={20} />
              </option>
            </select>
          </div>

          <div className="w-full">
            <h3 className="text-gray-300 font-medium mb-2">Destination</h3>
            <input
              type="text"
              value={destinationInput}
              onChange={(e) => setDestinationInput(e.target.value)}
              placeholder="Add destination"
              className="w-full p-2 bg-gray-900 text-white rounded shadow border border-gray-600"
            />
            <button
              onClick={handleAddTag}
              className="bg-orange-500 text-white px-4 py-2 rounded mt-2"
            >
              Add
            </button>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-gray-300 font-medium mb-2">Tags</h3>
          <div>
            {tags.map((tag, index) => (
              <div
                key={index}
                className="flex items-center gap-2 mb-2"
              >
                <span className="text-gray-300">{tag.source} {tag.direction} {tag.destination}</span>
                <button
                  onClick={() => handleRemoveTag(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  x
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-gray-700 flex justify-end">
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-orange-600"
        >
          {selectedPolicy ? "Save Changes" : "Create Policy"}
        </button>
      </div>
    </div>
  );
};

export default PolicyDrawer;
