// import Slider from "react-slick";
// import HeroSection from "../api/Global/components/hero";
// import StepOneSection from "../api/Global/components/stepOneSection";
// import StepThirdSection from "../api/Global/components/stepThirdSection";
// import StepTwoSection from "../api/Global/components/stepTwosection";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import FAQAccordion from "../api/Global/components/fAQAccordion";
// import FeatureCards from "../api/Global/components/featureCards";
// import PricingPlans from "../api/Global/components/pricingPlans";
// import Getstarted from "../api/Global/components/getstarted";

// const HomePage = () => {

//   const settings = {
//     dots: false, 
//     infinite: false, 
//     speed: 500, 
//     slidesToShow: 1, 
//     slidesToScroll: 1, 
//     arrows: true,
//   };

//   return (
//     <div className=" bg-white dark:bg-gradient-to-r from-black via-gray-900 to-black">
//       <div className="">
//         <HeroSection />
//       </div>
//       <div className="text-center text-gray-600 py-12">
//         <h2 className="text-3xl  dark:text-white  text-gray-900 md:text-4xl font-bold">
//           Seamless Steps to Get Started
//         </h2>
//         <p className="dark:text-slate-200  text-gray-800  mt-4 max-w-2xl mx-auto text-sm md:text-base">
//           Follow these simple steps to set up JACADA for your team and secure your network effortlessly.
//         </p>
//       </div>
//       <div className="max-w-7xl mx-auto px-4">
//         <Slider {...settings}>
//           <div>
//             <StepOneSection />
//           </div>
//           <div>
//             <StepTwoSection />
//           </div>
//           <div>
//             <StepThirdSection />
//           </div>
//         </Slider>
//         </div>
       
//        <div > <Getstarted /></div>

//       <div>
//       <FeatureCards/>
//         <FAQAccordion/>
        
//         <PricingPlans/>
//       </div>
//     </div>
//   );
// };

// export default HomePage;


// // src/pages/Home.tsx
// import keycloakService from '../services/keycloakService';

// const HomePage = () => {
//   const handleGetStartedClick = () => {
//     keycloakService.login();
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center">
//       <div className="text-center p-6 bg-white rounded shadow-lg">
//         <h1 className="text-3xl font-semibold">Welcome to Our App!</h1>
//         <button
//           onClick={handleGetStartedClick}
//           className="bg-green-500 hover:bg-green-600 text-white text-base font-semibold px-6 py-3 rounded-lg shadow-lg mt-4"
//         >
//           Get Started - Free
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HomePage;


import React from "react";
import { useKeycloak } from "../keycloakprovider";


const HomePage: React.FC = () => {
  const { login } = useKeycloak();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to the App</h1>
      <button
        onClick={login}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg"
      >
        Get Started
      </button>
    </div>
  );
};

export default HomePage;
