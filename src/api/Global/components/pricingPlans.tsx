import PricingCard from "./pricingCard";

const plans = [
  {
    id: "1",
    title: "1 Month",
    price: "$12.95",
    save: "0%",
    details: "Billed $12.95 every month. Includes a 30-day money-back guarantee.",
    buttonText: "Select Plan",
  },
  {
    id: "2",
    title: "2 Years + 4 Months FREE",
    price: "$4.99",
    save: "61%",
    details: "Billed $139.72 for 28 months. Includes a 30-day money-back guarantee.",
    buttonText: "Get Special Deal",
    isPopular: true,
  },
  {
    id: "3",
    title: "12 Months + 3 Months FREE",
    price: "$6.67",
    save: "48%",
    details: "Billed $99.95 for 15 months. Includes a 30-day money-back guarantee.",
    buttonText: "Select Plan",
  },
];

const PricingPlans: React.FC = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900  py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
        Choose the Perfect VPN Plan for Your Needs
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          Your digital life protected from <span className="font-semibold">$0.17 a day</span>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {plans.map((plan) => (
          <PricingCard
            key={plan.id}
            id={plan.id}
            title={plan.title}
            price={plan.price}
            save={plan.save}
            details={plan.details}
            buttonText={plan.buttonText}
            isPopular={plan.isPopular}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
