
import { Route, Routes, Navigate } from "react-router-dom";
// import GlobalLayout from "./GlobalLayout";
import Signup from "../pages/auth/signup";
import Profile from "../pages/dashboard/profile";
import Settings from "../pages/dashboard/settings";
import CreateVpn from "../pages/vpn/createVpn";
import EditVpn from "../pages/vpn/editVpn";
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

const AppRoutes = () => (
  <Routes>
   
    <Route element={<GlobalLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/vpns" element={<VpnList />} />
      <Route path="/vpns/create" element={<CreateVpn />} />
      <Route path="/vpns/edit/:id" element={<EditVpn />} />
      <Route path="/vpn-protocol" element={<VPNProtocolsPage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
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
    </Route>
    <Route path="*" element={<Navigate to="/login" />} />
  </Routes>
);

export default AppRoutes;
