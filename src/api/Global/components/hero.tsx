
import { stepData } from "./heroData";

const HeroSection: React.FC = () => {
  return (
    <section className=" max-w-7xl mx-auto flex flex-col lg:flex-row items-center dark:bg-gradient-to-r from-black via-gray-900 to-black justify-between text-center lg:text-left px-8 bg-white text-gray-700 dark:text-gray-300 relative overflow-hidden mt-20">
     <div>

     </div>
     
      <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
        <h1 className="text-4xl text-gray-900 dark:text-white md:text-5xl font-extrabold leading-tight tracking-wide">
          Secure Connectivity <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-green-400">
            Simplified
          </span>
        </h1>
        <p className="dark:text-slate-200  text-gray-700 mt-4 text-lg md:text-xl max-w-lg">
          Replace VPNs and firewalls with a Zero Trust Networking platform built for modern teams.
        </p>
      
        <div className="flex-1 mt-4">
            <ol className="space-y-6 text-left">
              {stepData.map((step) => (
                <li
                  key={step.stepNumber}
                  className="flex items-start space-x-4 border-l-4 border-cyan-500 pl-4"
                >
                  <div>
                    <span className="text-2xl font-bold text-cyan-500">
                      {step.stepNumber}.
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold dark:text-slate-200  text-gray-700">{step.description}</h4>
                  </div>
                </li>
              ))}
            </ol>
          </div>
      </div>

      <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center items-center ml-16">
        <div className="w-full h-auto  rounded-md flex items-center justify-center shadow-lg">
          <img src="https://nordvpn.com/wp-content/uploads/blog-featured-vpn-vs-rdp.svg" alt="VPN avatar" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
