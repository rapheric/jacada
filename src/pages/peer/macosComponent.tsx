
import { useState } from "react";
import ComponentOne from "./componentOne";
import ComponentTwo from "./componentTwo";
import { Steps, Divider, Button } from "antd";


const MacOSContent = () => {
    const [activeSection, setActiveSection] = useState<"component1" | "component2" | null>(null);
  
    const toggleSection = (section: "component1" | "component2") => {
      setActiveSection(activeSection === section ? null : section);
    };

  return (
    <>

<Steps
      progressDot
      current={1}
      style={{ color: "unset" }}
      items={[
        { title: <span className="text-blue-500 ">Download & run </span>},
        { title: <span className="text-green-500 ">Click on "Connect"</span> },
        { title: <span className="text-orange-500 ">Use Email </span>},
      ]}
    />
    <Divider />
    <Steps
      progressDot
      current={1}
      style={{ color: "unset" }}
      direction="vertical"
      items={[
        
        {
            
          title: <span className="text-blue-500">Download & run </span>,
          description: (
            <Button type="primary" className="text-slate-200">
              Download and run Macos Installer
            </Button>
          ),
        },
        {
            title: <span className="text-green-500 ">Click on <a href="#">Connect</a></span>,
          description:<span className="text-slate-200">Click on <a  className="text-green-500" href="#">Connect</a> from the JACADA icon in your system tray</span> 
        },
        {
            title: <span className="text-orange-500 ">Use Email </span>,
          description: <span className="text-slate-200">Sign up using your email address.</span>
        },
      ]}
    />
      <div className="w-full max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg">
      <div>
        <button
          onClick={() => toggleSection("component1")}
          className="w-full text-left px-4 py-2 bg-gray-500 text-white rounded-t-lg hover:bg-blue-600 focus:outline-none"
        >
          Install manually with terminal
        </button>
        {activeSection === "component1" && (
          <div className="p-4 bg-gray-700 text-slate-200">
            <ComponentOne />
          </div>
        )}
      </div>
      <div>
        <button
          onClick={() => toggleSection("component2")}
          className="w-full text-left px-4 py-2 bg-blue-500 text-white rounded-b-lg hover:bg-blue-600 focus:outline-none"
        >
          Install manually with Homebrew
        </button>
        {activeSection === "component2" && (
          <div className="p-4 bg-gray-700 text-slate-200">
            <ComponentTwo />
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default MacOSContent;