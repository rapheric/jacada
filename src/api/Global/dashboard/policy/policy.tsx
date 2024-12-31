
import React, { useState } from "react";
import { Layout, Typography } from "antd";
import DeleteDrawer from "./DeleteDrawer";
import PolicyDrawer from "./PolicyDrawer";
import PolicyTable from "./PolicyTable";
import SearchFilter from "./SearchFilter";

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

const Policy: React.FC = () => {
  const [policies, setPolicies] = useState([
    {
      key: "1",
      name: "Policy 1",
      active: true,
      sources: "192.168.1.1",
      direction: "Inbound",
      destinations: "192.168.2.1",
      protocol: "TCP",
      ports: "80",
      posture: "Allow",
    },
    {
      key: "2",
      name: "Policy 2",
      active: false,
      sources: "192.168.1.2",
      direction: "Outbound",
      destinations: "192.168.3.1",
      protocol: "UDP",
      ports: "443",
      posture: "Deny",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [showActive, setShowActive] = useState(true);
  const [showInactive, setShowInactive] = useState(false);
  const [showTenRows, setShowTenRows] = useState(false);
  const [selectedPolicy, setSelectedPolicy] = useState<any | null>(null);
  const [editDrawerVisible, setEditDrawerVisible] = useState(false);
  const [deleteDrawerVisible, setDeleteDrawerVisible] = useState(false);


  const handleDeletePolicy = (policy: any) => {
    setSelectedPolicy(policy);
    setDeleteDrawerVisible(true);
  };

  const handleEditPolicy = (policy: any) => {
    setSelectedPolicy(policy);
    setEditDrawerVisible(true);
  };

  const handleSavePolicy = (policy: any) => {
    if (selectedPolicy) {
      setPolicies((prevPolicies) =>
        prevPolicies.map((p) => (p.key === selectedPolicy.key ? policy : p))
      );
    } else {
      setPolicies((prevPolicies) => [
        ...prevPolicies,
        { ...policy, key: Date.now().toString() },
      ]);
    }
    setEditDrawerVisible(false);
  };

  return (
    <Layout className="min-h-screen bg-gray-900">
      <Header className=" text-white ">
        <Title level={3} className="text-gray-300  bg-gray-900 text-center ">
          Access Control Policies
        </Title>
      </Header>

      <Content className="p-8 space-y-8">
        <Paragraph className="text-lg text-gray-400 text-center">
          Create rules to manage access in your network and define what peers
          can connect. Learn more about Access Control on our documentation.
        </Paragraph>

        <SearchFilter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          showActive={showActive}
          setShowActive={setShowActive}
          showInactive={showInactive}
          setShowInactive={setShowInactive}
          showTenRows={showTenRows}
          setShowTenRows={setShowTenRows}
          setEditDrawerVisible={setEditDrawerVisible}
        />
        <PolicyTable
          policies={policies}
          searchQuery={searchQuery}
          showTenRows={showTenRows}
          handleEditPolicy={handleEditPolicy}
          handleDeletePolicy={handleDeletePolicy}
        />

        <PolicyDrawer
          selectedPolicy={selectedPolicy}
          editDrawerVisible={editDrawerVisible}
          setEditDrawerVisible={setEditDrawerVisible}
          setPolicies={handleSavePolicy}
        />

        <DeleteDrawer
          selectedPolicy={selectedPolicy}
          deleteDrawerVisible={deleteDrawerVisible}
          setDeleteDrawerVisible={setDeleteDrawerVisible}
          setPolicies={(newPolicies) => setPolicies(newPolicies)}
        />
      </Content>
    </Layout>
  );
};

export default Policy;
