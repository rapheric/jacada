import { Steps, Button } from "antd";


const ComponentOne = () => (
  <>
    <Steps
      progressDot
      current={1}
      style={{ color: "unset" }}
      direction="vertical"
      items={[
        {
          title: (
            <span className="text-gray-200">
              Download and install HomeBrew{" "}
            </span>
          ),
          description: (
            <Button type="primary" className="text-slate-200 bg-green-400">
              Download and install HomeBrew
            </Button>
          ),
        },
        {
          title: <span className="text-gray-200 ">Install JACADA</span>,
          description: (
            <div className="text-gray-500">
              # for CLI only brew install netbirdio/tap/netbird # for GUI
              package brew install --cask netbirdio/tap/netbird-ui
            </div>
          ),
        },
        {
          title: (
            <span className="text-gray-200">Start NetBird daemon </span>
          ),
          description: (
            <div className="text-gray-500">
              sudo netbird service 
              <br/>
              install sudo netbird service.
            </div>
          ),
        },
        {
            title: (
              <span className="text-gray-200 ">Run NetBird and log in the browser </span>
            ),
            description: (
              <div className="text-gray-500">
                netbird up
              </div>
            ),
          },
      ]}
    />
  </>
);

export default ComponentOne;
