import React from "react";
import { Button } from "antd";

const SecureAccessUI: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto bg-black text-white px-4 py-8 md:px-12 md:py-16">
        <div></div>
      <div className="text-center mb-16 ">
        <h1 className="text-6xl md:text-5xl font-bold mb-6">
          Secure access to cloud and on-premises resources
        </h1>
        <p className="text-gray-300 text-lg md:text-xl">
          NetBird enables secure remote access to cloud or on-premises servers, containers, databases, and other internal resources. IT personnel can efficiently manage access from a unified cloud panel, simplifying network configuration and maintenance.
        </p>
      </div>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 min-h-screen">
          <div className="flex-1">
            <Button type="default" className="bg-orange-500 text-white mb-4 text-lg px-6 py-2">
              Step 1
            </Button>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              Add your team and machines
            </h2>
            <p className="text-gray-300 text-lg md:text-xl">
              Your team can install NetBird on macOS, Windows, Linux, or mobile phones and log in with SSO and MFA. Your IT admin can easily manage access.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-NGEQDekk2BwsllLjk4tcIM_BPIzXECdsg&s"
              alt="Step 1 illustration"
              className="rounded-md shadow-lg border border-gray-700 w-full h-auto"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-6">
          <div className="flex-1">
            <Button type="default" className="bg-orange-500 text-white mb-4 text-lg px-6 py-2">
              Step 2
            </Button>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              Group your team and machines
            </h2>
            <p className="text-gray-300 text-lg md:text-xl">
              NetBird lets your IT admin easily create and assign groups to
              resources and team members using an intuitive cloud panel. It
              also syncs existing groups from identity providers like Google,
              Okta, or Microsoft.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-NGEQDekk2BwsllLjk4tcIM_BPIzXECdsg&s"
              alt="Step 2 illustration"
              className="rounded-md shadow-lg border border-gray-700 w-full h-auto"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
          <div className="flex-1">
            <Button type="default" className="bg-orange-500 text-white mb-4 text-lg px-6 py-2">
              Step 3
            </Button>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              Define access rules between groups
            </h2>
            <p className="text-gray-300 text-lg md:text-xl">
              Set up access rules between different groups, using NetBird’s
              simple rule configuration system. IT teams can efficiently manage
              network configurations.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-NGEQDekk2BwsllLjk4tcIM_BPIzXECdsg&s"
              alt="Step 3 illustration"
              className="rounded-md shadow-lg border border-gray-700 w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecureAccessUI;
