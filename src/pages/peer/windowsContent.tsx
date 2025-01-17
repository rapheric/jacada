
import { Steps, Divider, Button } from "antd";

const WindowsContent = () => (
    <>

    <Steps
          progressDot
          current={1}
          style={{ color: "unset" }}
          items={[
            { title: <span className="text-blue-500 ">Download & run </span>},
            { title: <span className="text-green-500 ">Click on "Connect"</span> },
            { title: <span className="text-orange-500 ">Use Email </span>},
          ]}
        />
        <Divider />
        <Steps
          progressDot
          current={1}
          style={{ color: "unset" }}
          direction="vertical"
          items={[
            
            {
                
              title: <span className="text-blue-500">Download & run </span>,
              description: (
                <Button type="primary" className="text-slate-200">
                  Download and run Windows Installer
                </Button>
              ),
            },
            {
                title: <span className="text-green-500 ">Click on <a href="#">Connect</a></span>,
              description:<span className="text-slate-200">Click on <a  className="text-green-500" href="#">Connect</a> from the JACADA icon in your system tray</span> 
            },
            {
                title: <span className="text-orange-500 ">Use Email </span>,
              description: <span className="text-slate-200">Sign up using your email address.</span>
            },
          ]}
        />
          
         
        </>
);

export default WindowsContent;