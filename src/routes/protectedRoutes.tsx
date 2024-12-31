
import { Route, Routes, Navigate } from "react-router-dom";
// import GlobalLayout from "./GlobalLayout";
import Signup from "../pages/auth/signup";
import Profile from "../pages/dashboard/profile";
import Settings from "../pages/dashboard/settings";
import CreateVpn from "../pages/vpn/createVpn";
// import EditVpn from "../pages/vpn/peersPage";
import VpnList from "../pages/vpn/vpnList";
import DashboardLayout from "../components/Layout/dashboardLayout";
import AccountSubscription from "../components/dash/accountSubscription";
import ActivityLogs from "../components/dash/activityLogs";
import ConnectionSettings from "../components/dash/connectionSettings";
import DashboardOverview from "../components/dash/dashboard";
import HelpSupport from "../components/dash/helpSupport";
import SecurityPrivacy from "../components/dash/securityPrivacy";
import ServerSelection from "../components/dash/serverSelection";
import HomePage from "../pages/dashboard/home";
import VPNProtocolsPage from "../pages/dashboard/vpnProtocols";
import GlobalLayout from "../components/glo/globalLayout";
// import PeersPage from "../pages/vpn/peersPage";
import SetupKey from "../pages/vpn/control";
import AcessControl from "../pages/vpn/acessCotrol";
import PeersPage from "../pages/vpn/peerspage";
import PricingUI from "../pages/vpn/pricing";
import SecureAccessUI from "../pages/vpn/LandingPg";
import Header from "../api/Global/components/navbar";
import StepSection from "../api/Global/components/stepTwosection";
import StepOneSection from "../api/Global/components/stepOneSection";
import StepThirdSection from "../api/Global/components/stepThirdSection";
import PlansAndBilling from "../api/Global/dashboard/plansBilling";
import AccessCo from "../api/Global/dashboard/cont";
import Lay from "../components/layouts/dash/Lay";
import SetupKeysDrawer from "../api/Global/dashboard/keyDrawer";
import Policy from "../api/Global/dashboard/policy/policy";
import SetupKeyUI from "../api/Global/dashboard/setUpKeyUI/setUpKeyUI";
// import PeersPage from "../pages/vpn/peerspage";

const AppRoutes = () => (
  <Routes>
   
    <Route element={<GlobalLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/lay" element={<Lay />} />
      <Route path="/key-drawer" element={<SetupKeysDrawer />} />
      <Route path="/key" element={<SetupKeyUI />} />
      <Route path="/landing" element={<SecureAccessUI/>} />
      <Route path="/step-two-section" element={<StepSection/>} />
      <Route path="/step-one-section" element={<StepOneSection/>} />
      <Route path="/acess-co" element={<AccessCo/>} />
      <Route path="/policy" element={<Policy/>} />
      <Route path="/step-three-section" element={<StepThirdSection/>} />
      <Route path="/pricing" element={<PricingUI />} />
      <Route path="/header" element={<Header />} />
      <Route path="/vpns" element={<VpnList />} />
      <Route path="/plans-billing" element={<PlansAndBilling />} />
      <Route path="/vpns/create" element={<CreateVpn />} />
      <Route path="/vpn-peers" element={<PeersPage />} />
      <Route path="/vpn-protocol" element={<VPNProtocolsPage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/control" element={< SetupKey/>} />
    </Route>

    <Route path="/dashboard" element={<DashboardLayout />}>
      <Route path="home-page" element={<HomePage />} />
      <Route path="overview" element={<DashboardOverview />} />
      <Route path="server-selection" element={<ServerSelection />} />
      <Route path="connection-settings" element={<ConnectionSettings />} />
      <Route path="activity-logs" element={<ActivityLogs />} />
      <Route path="security-privacy" element={<SecurityPrivacy />} />
      <Route path="account-subscription" element={<AccountSubscription />} />
      <Route path="help-support" element={<HelpSupport />} />
      {/* <Route path="control" element={<SetupKey />} /> */}
    </Route>
    <Route path="*" element={<Navigate to="/sign-up" />} />
  </Routes>
);

export default AppRoutes;
