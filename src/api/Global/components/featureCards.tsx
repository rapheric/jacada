import React, { useState } from "react";
import Slider from "react-slick";
import FeatureCard from "./featureCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeatureCards: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const features = [
    {
      title: "High-Speed Global Servers",
      icon: "🌍",
      features: [
        "Servers in 100+ countries",
        "10-Gbps networks",
        "Unlimited bandwidth",
      ],
    },
    {
      title: "Multi-Device Coverage",
      icon: "📱",
      features: [
        "7 VPN connections at once",
        "Apps for all operating systems",
        "Apps for all operating systems"
      ],
    },
    {
      title: "Ironclad Privacy",
      icon: "🔒",
      features: [
        "No user activity tracking",
        "Certified no-logs policy",
        "Email leak monitoring",
      ],
    },
    {
      title: "Powerful Protection",
      icon: "🛡️",
      features: [
        "Advanced encryption",
        "Split tunneling",
        "Automated kill switch",
      ],
    },
    {
      title: "Customer Support",
      icon: "💬",
      features: [
        "24/7 availability",
        "Support in multiple languages",
        "Contact via live chat & email",
      ],
    },
    {
      title: "Money-Back Guarantee",
      icon: "💵",
      features: [
        "Hassle-free policy",
        "100% refund",
        "Easy process via Support Center",
      ],
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000, 
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, 
    arrows: false, 
    cssEase: "linear", 
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex  flex-col">
          <h2 className="text-3xl font-bold text-center mb-8">See What’s Included in All Plans</h2>
          <div
            onClick={() => setShowAll(!showAll)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 float-start"
          >
            {showAll ? "Show Slider" : "Show All"}
          </div>
        </div>
        {showAll ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                icon={feature.icon}
                features={feature.features}
              />
            ))}
          </div>
        ) : (
          <Slider {...settings}>
            {features.map((feature, index) => (
              <div key={index} className="px-4">
                <FeatureCard
                  title={feature.title}
                  icon={feature.icon}
                  features={feature.features}
                />
              </div>
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default FeatureCards;
