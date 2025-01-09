
import { FiPlus } from "react-icons/fi";

const Header = ({ onAdd }: { onAdd: () => void }) => (
  <header className="flex justify-between items-center mb-4">
    <h1 className="text-xl font-semibold">Peers</h1>
    <button
      className="bg-blue-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md flex items-center"
      onClick={onAdd}
    >
      <FiPlus className="mr-2" /> Add Peer
    </button>
  </header>
);

export default Header;