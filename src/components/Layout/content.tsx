
import Policy from "../../api/Global/dashboard/policy/policy";
import SetupKeysPage from "../../pages/key/setupKey";
import Peer from "../../pages/peer/peers";

import ActivityLogs from "../dash/activityLogs";


interface ContentProps {
  activeItem: string;
}

const UserContent: React.FC<ContentProps> = ({ activeItem }) => {
  const renderContent = () => {
    switch (activeItem) {
      case 'setupkeey':
        return <SetupKeysPage/>;
        case 'activity logs':
        return <ActivityLogs/>;
      case 'Peers':
        return <Peer/>;
      case 'Policy':
        return <Policy/>;
      default:
        return <SetupKeysPage/>;
    }
  };

  return <main className="flex-1">{renderContent()}</main>;
};

export default UserContent;
