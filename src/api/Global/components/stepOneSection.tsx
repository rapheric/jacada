import React from "react";

const StepOneSection: React.FC = () => {
  return (
    <section className=" text-gray-700 dark:text-gray-300 px-6 py-12 md:px-8 lg:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-3">
      <div className="flex-1">
        <div className="bg-green-500 text-white text-sm font-semibold px-3 py-1 inline-block rounded-full mb-4">
          Step 1
        </div>
        <h2 className="dark:text-gray-300 text-gray-700 text-2xl md:text-4xl font-bold mb-4">
          Add your team <br /> and machines
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-lg">
          Your team can install NetBird on macOS, Windows, Linux, or mobile
          phones and log in with SSO and MFA. Your IT admin can automate
          NetBird agent installation on servers with Terraform or Ansible.
        </p>
      </div>
      <div className="flex-1 max-w-sm md:max-w-md lg:max-w-lg overflow-hidden">
          <img
            src="https://vpnoverview.com/wp-content/uploads/How-to-Watch-Avatar-The-Last-Airbender-From-Anywhere-Featured-Image.png"
            alt="Single Sign-On Form Screenshot"
            className="w-full  h-auto rounded-lg object-cover"
          />
      </div>
    </section>
  );
};

export default StepOneSection;
