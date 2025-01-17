import { useState } from "react";
import TabContent from "./tabComponent";

interface ModalProps {
  setOpenDrawer: (isOpen: boolean) => void; 
}

const Modal: React.FC<ModalProps> = ({ setOpenDrawer }) => {
  const [selectedTab, setSelectedTab] = useState<"linux" | "windows" | "macos">(
    "linux"
  );

  const handleClose = () => {
    setOpenDrawer(false); 
  };

  return (
    <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-80 flex items-center justify-center">
      <div className="max-w-4xl w-full p-6">
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-4 text-slate-200">
            Install JACADA
          </h1>
          <p className="text-gray-300 mb-6">
            To get started, install JACADA and log in with your email account.
          </p>
          <div className="flex justify-around mb-6">
            {["linux", "windows", "macos"].map((tab) => (
              <button
                key={tab}
                className={`py-2 px-4 rounded ${
                  selectedTab === tab
                    ? "bg-orange-500 text-slate-200"
                    : "bg-gray-700 text-slate-200"
                }`}
                onClick={() => setSelectedTab(tab as "linux" | "windows" | "macos")}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <TabContent selectedTab={selectedTab} />
          <p className="text-gray-400 mt-6">
            After that, you should be connected. Add more devices to your
            network or manage your existing devices in the admin panel. If you
            have further questions, check out our{" "}
            <a href="#" className="text-orange-500 underline">
              Installation Guide
            </a>
            .
          </p>
          <button
            onClick={handleClose}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
