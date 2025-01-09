import { useState } from "react";
import Header from "./header";
import PeerTable from "./listPeer";
import Drawer from "./drawer";
import { IoLogoMicrosoft } from "react-icons/io5";
import { FaLinux, FaApple } from "react-icons/fa";

const Peer = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [drawerMode, setDrawerMode] = useState<"add" | "edit">("add");
  const [peers, setPeers] = useState([
    {
      id: 1,
      name: "my-first-peer",
      address: "my-first-peer.netbird.cloud",
      ip: "100.6.6.155",
      group: "All",
      lastSeen: "A minute ago",
      os:<IoLogoMicrosoft />,
      version: "v0.25.9",
    },
    {
      id: 2,
      name: "peer-two",
      address: "peer-two.netbird.cloud",
      ip: "100.6.6.156",
      group: "Group 1",
      lastSeen: "2 minutes ago",
      os:<FaLinux />,
      version: "v0.25.8",
    },
    {
      id: 3,
      name: "peer-three",
      address: "peer-three.netbird.cloud",
      ip: "100.6.6.157",
      group: "Group 2",
      lastSeen: "5 minutes ago",
      os:<FaApple />,
      version: "v0.25.7",
    },
    {
      id: 4,
      name: "peer-four",
      address: "peer-four.netbird.cloud",
      ip: "100.6.6.158",
      group: "Group 1",
      lastSeen: "10 minutes ago",
      os:<IoLogoMicrosoft />,
      version: "v0.25.6",
    },
    {
      id: 5,
      name: "peer-five",
      address: "peer-five.netbird.cloud",
      ip: "100.6.6.159",
      group: "Group 3",
      lastSeen: "15 minutes ago",
      os:<FaLinux />,
      version: "v0.25.5",
    },
    {
      id: 6,
      name: "peer-six",
      address: "peer-six.netbird.cloud",
      ip: "100.6.6.160",
      group: "Group 2",
      lastSeen: "20 minutes ago",
      os:<FaLinux />,
      version: "v0.25.4",
    },
    {
      id: 7,
      name: "peer-seven",
      address: "peer-seven.netbird.cloud",
      ip: "100.6.6.161",
      group: "Group 3",
      lastSeen: "30 minutes ago",
      os:<FaApple />,
      version: "v0.25.3",
    },
    {
      id: 8,
      name: "peer-eight",
      address: "peer-eight.netbird.cloud",
      ip: "100.6.6.162",
      group: "Group 1",
      lastSeen: "1 hour ago",
      os:<IoLogoMicrosoft />,
      version: "v0.25.2",
    },
    {
      id: 9,
      name: "peer-nine",
      address: "peer-nine.netbird.cloud",
      ip: "100.6.6.163",
      group: "Group 2",
      lastSeen: "2 hours ago",
      os:<FaLinux />,
      version: "v0.25.1",
    },
    {
      id: 10,
      name: "peer-ten",
      address: "peer-ten.netbird.cloud",
      ip: "100.6.6.164",
      group: "Group 3",
      lastSeen: "5 hours ago",
      os:<FaApple />,
      version: "v0.25.0",
    },
    {
      id: 11,
      name: "peer-eleven",
      address: "peer-eleven.netbird.cloud",
      ip: "100.6.6.165",
      group: "Group 1",
      lastSeen: "10 hours ago",
      os:<IoLogoMicrosoft />,
      version: "v0.24.9",
    },
    {
      id: 12,
      name: "peer-twelve",
      address: "peer-twelve.netbird.cloud",
      ip: "100.6.6.166",
      group: "Group 2",
      lastSeen: "15 hours ago",
      os:<FaLinux />,
      version: "v0.24.8",
    },
  ]);

  const openDrawer = (mode: "add" | "edit", _id?: number) => {
    setDrawerMode(mode);
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const handleAddPeer = (data: any) => {
    setPeers([...peers, { id: peers.length + 1, ...data }]);
    closeDrawer();
  };

  return (
    <div className="dark:bg-gray-900  bg-white dark:text-slate-200 text-gray-700 min-h-screen p-4">
      <div className="max-w-8xl mx-10 mt-16">
        <Header onAdd={() => openDrawer("add")} />
        <PeerTable peers={peers} onEdit={(id) => openDrawer("edit", id)} />
        <Drawer
          isOpen={isDrawerOpen}
          mode={drawerMode}
          onClose={closeDrawer}
          onSubmit={handleAddPeer}
        />
      </div>
    </div>
  );
};

export default Peer;
