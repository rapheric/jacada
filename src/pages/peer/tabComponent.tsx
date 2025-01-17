import LinuxContent from "./linuxContent";
import MacOSContent from "./macosComponent";
import WindowsContent from "./windowsContent";

interface TabContentProps {
  selectedTab: "linux" | "windows" | "macos"; 
}

const TabContent: React.FC<TabContentProps> = ({ selectedTab }) => {
  switch (selectedTab) {
    case "linux":
      return <LinuxContent />;
    case "windows":
      return <WindowsContent />;
    case "macos":
      return <MacOSContent />;
    default:
      return null;
  }
};

export default TabContent;
