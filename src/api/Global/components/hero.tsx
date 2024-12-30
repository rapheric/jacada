import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-black text-white h-screen flex flex-col justify-center items-center px-4 text-center">
      {/* Title Section */}
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        Secure access to <br />
        <span className="text-gray-200">cloud and on-premises resources</span>
      </h1>

      {/* Description Section */}
      <p className="text-gray-300 text-sm md:text-lg max-w-2xl">
        NetBird enables secure remote access to cloud or on-premises servers,
        containers, databases, and other internal resources. IT personnel can
        efficiently manage access from a unified cloud panel, simplifying
        network configuration and maintenance.
      </p>
    </section>
  );
};

export default HeroSection;
