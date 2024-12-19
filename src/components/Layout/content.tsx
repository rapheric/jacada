
import AccountSubscription from "../dash/accountSubscription";
import ActivityLogs from "../dash/activityLogs";
import ConnectionSettings from "../dash/connectionSettings";
import DashboardOverview from "../dash/dashboard";
import HelpSupport from "../dash/helpSupport";
import SecurityPrivacy from "../dash/securityPrivacy";
import ServerSelection from "../dash/serverSelection";


interface ContentProps {
  activeItem: string;
}

const UserContent: React.FC<ContentProps> = ({ activeItem }) => {
  const renderContent = () => {
    switch (activeItem) {
      case 'Dashboard Overview':
        return <DashboardOverview/>;
      case 'Server Selection':
        return <ServerSelection/>;
      case 'Connection Settings':
        return <ConnectionSettings/>;
      case 'Activity & Logs':
        return <ActivityLogs/>;
      case 'Security & Privacy':
        return <SecurityPrivacy/>;
      case 'Account & Subscription':
        return <AccountSubscription/>;
      case 'Help & Support':
        return <HelpSupport/>;
      default:
        return <DashboardOverview/>;
    }
  };

  return <main className="flex-1 p-6">{renderContent()}</main>;
};

export default UserContent;
