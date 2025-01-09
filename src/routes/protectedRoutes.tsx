
import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "../pages/auth/signup";
import DashboardLayout from "../components/Layout/dashboardLayout";
import ActivityLogs from "../components/dash/activityLogs";
import DashboardOverview from "../components/dash/dashboard";
import GlobalLayout from "../components/glo/globalLayout";
import SetupKey from "../pages/vpn/control";
import PeersPage from "../pages/vpn/peerspage";
import PricingUI from "../pages/vpn/pricing";
import SecureAccessUI from "../pages/vpn/LandingPg";
import Header from "../api/Global/components/navbar";
import StepSection from "../api/Global/components/stepTwosection";
import StepOneSection from "../api/Global/components/stepOneSection";
import StepThirdSection from "../api/Global/components/stepThirdSection";
import PlansAndBilling from "../api/Global/dashboard/plansBilling";
import AccessCo from "../api/Global/dashboard/cont";
import SetupKeysDrawer from "../api/Global/dashboard/keyDrawer";
import Policy from "../api/Global/dashboard/policy/policy";
import SetupKeyUI from "../api/Global/dashboard/setUpKeyUI/setUpKeyUI";
import Peer from "../pages/peer/peers";
// import Dashboard from "../pages/key/dashboard";
import HomePage from "../pages/home";
import SetupKeysPage from "../pages/key/setupKey";
import PlanDetails from "../api/Global/components/pricingDetails";

const AppRoutes = () => (
  <Routes>
    <Route element={<GlobalLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/landing" element={<SecureAccessUI />} />
      <Route path="/step-two-section" element={<StepSection />} />
      <Route path="/step-one-section" element={<StepOneSection />} />
      <Route path="/step-three-section" element={<StepThirdSection />} />
      <Route path="/pricing" element={<PricingUI />} />
      <Route path="/plan/:id" element={<PlanDetails />} />
      <Route path="/header" element={<Header />} />

      {/* <Route path="/dashh" element={<Dashboard />} /> */}
      <Route path="/plans-billing" element={<PlansAndBilling />} />
    </Route>
    <Route path="/dashboard" element={<DashboardLayout />}>
      <Route path="overview" element={<DashboardOverview />} />
      <Route path="activity-logs" element={<ActivityLogs />} />
      <Route path="key" element={<SetupKey />} />
      <Route path="peer" element={<Peer />} />
      <Route path="key-drawer" element={<SetupKeysDrawer />} />
      <Route path="setup-key-ui" element={<SetupKeyUI />} />
      <Route path="vpn-peers" element={<PeersPage />} />
      <Route path="access-co" element={<AccessCo />} />
      <Route path="policy" element={<Policy />} />
      <Route path="setupkeey" element={<SetupKeysPage />} />
    </Route>
    <Route path="*" element={<Navigate to="/sign-up" />} />
  </Routes>
);

export default AppRoutes;
