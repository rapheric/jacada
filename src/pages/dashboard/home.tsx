
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleStarted = () => {
    navigate("/sign-up");
  };

  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-black dark:text-white min-h-screen transition-colors duration-300">
      <header className="bg-transparent py-20 text-center">
        <h1 className="text-3xl lg:text-6xl font-bold mb-4 text-white">
          Secure Your Internet with JACADA VPN
        </h1>
        <p className="text-lg lg:text-xl mb-8 text-gray-200">
          Experience ultimate privacy and freedom online.
        </p>
        <button
          onClick={handleStarted}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg"
        >
          Get Started
        </button>
      </header>

      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-black dark:text-white transition-colors duration-300">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-200 dark:text-gray-200">
            Why Choose JACADA VPN?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Military-Grade Encryption",
                description:
                  "Keep your data safe with top-notch encryption protocols.",
              },
              {
                title: "Unlimited Bandwidth",
                description: "Stream, browse, and download without any limits.",
              },
              {
                title: "Global Servers",
                description:
                  "Access content from anywhere with servers in over 50 countries.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg text-center shadow-md transition-colors duration-300"
              >
                <h3 className="text-xl text-gray-600 dark:text-gray-300 font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-black dark:text-white transition-colors duration-300">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-200 dark:text-gray-200">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Basic Plan",
                price: "$5/month",
                features: ["1 Device", "Limited Bandwidth", "Basic Support"],
              },
              {
                title: "Pro Plan",
                price: "$10/month",
                features: [
                  "5 Devices",
                  "Unlimited Bandwidth",
                  "Priority Support",
                ],
                highlight: true,
              },
              {
                title: "Enterprise Plan",
                price: "$20/month",
                features: [
                  "Unlimited Devices",
                  "Unlimited Bandwidth",
                  "24/7 Support",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`flex flex-col p-8 rounded-lg text-center shadow-lg transform transition duration-300 ease-in-out ${
                  plan.highlight
                    ? "bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
                    : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                } min-h-[400px] hover:scale-105`}
              >
                <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                <p className="text-4xl font-extrabold mb-6">{plan.price}</p>
                <ul className="mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="mb-2">
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={handleStarted}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg mt-16"
                >
                  Select A Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-black dark:text-white transition-colors duration-300">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
          Ready to Secure Your Internet?
        </h2>
        <p className="text-lg lg:text-xl mb-8 text-gray-200">
          Join thousands of satisfied users today.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg">
          Get Started Now
        </button>
      </section>
    </div>
  );
};

export default HomePage;
