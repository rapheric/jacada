// Header Component
import  { useState } from "react";
import { FiPlus } from "react-icons/fi";
import Modal from "./tabContent";


const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpenModal = () => {
    setOpenDrawer(true);
    console.log("Modal state:", openDrawer);
  };

  return (
    <header className="flex justify-between items-center mb-4">
      <h1 className="text-xl font-semibold">Peers</h1>
      <button
        className="bg-blue-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md flex items-center"
        onClick={handleOpenModal}
      >
        <FiPlus className="mr-2" /> Add Peer
      </button>
      {openDrawer && <Modal setOpenDrawer={setOpenDrawer} />}
    </header>
  );
};

export default Header;