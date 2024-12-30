
// export default Policy;
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
      key: '1',
      name: 'Policy 1',
      active: true,
      sources: '192.168.1.1',
      direction: 'Inbound',
      destinations: '192.168.2.1',
      protocol: 'TCP',
      ports: '80',
      posture: 'Allow'
    },
    {
      key: '2',
      name: 'Policy 2',
      active: false,
      sources: '192.168.1.2',
      direction: 'Outbound',
      destinations: '192.168.3.1',
      protocol: 'UDP',
      ports: '443',
      posture: 'Deny'
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [showActive, setShowActive] = useState(true);
  const [showInactive, setShowInactive] = useState(false);
  const [showTenRows, setShowTenRows] = useState(false);
  const [selectedPolicy, setSelectedPolicy] = useState<any | null>(null);
  const [editDrawerVisible, setEditDrawerVisible] = useState(false);
  const [deleteDrawerVisible, setDeleteDrawerVisible] = useState(false);

  // Search Handler
  // const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchQuery(e.target.value);
  // };

  // Open the Delete Drawer
  const handleDeletePolicy = (policy: any) => {
    setSelectedPolicy(policy);
    setDeleteDrawerVisible(true);
  };

  // Open the Edit Drawer
  const handleEditPolicy = (policy: any) => {
    setSelectedPolicy(policy);
    setEditDrawerVisible(true);
  };

  // Open the Add Policy Drawer (this sets the selectedPolicy to null)
  const handleAddPolicy = () => {
    setSelectedPolicy(null); // No policy selected (i.e., it's a new policy)
    setEditDrawerVisible(true);
  };

  // Add/Edit Policy Drawer
  const handleSavePolicy = (policy: any) => {
    if (selectedPolicy) {
      // Update existing policy
      setPolicies((prevPolicies) =>
        prevPolicies.map((p) => (p.key === selectedPolicy.key ? policy : p))
      );
    } else {
      // Create new policy
      setPolicies((prevPolicies) => [...prevPolicies, { ...policy, key: Date.now().toString() }]);
    }
    setEditDrawerVisible(false); // Close drawer after saving
  };

  return (
    <Layout className="min-h-screen bg-gray-900">
      <Header className="bg-blue-800 text-white p-6">
        <Title level={3} className="text-white text-center">Access Control Policies</Title>
      </Header>

      <Content className="p-8 space-y-8">
        <Paragraph className="text-lg text-gray-400">
          Create rules to manage access in your network and define what peers can connect. Learn more about Access Control on our documentation.
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
          setPolicies={handleSavePolicy}  // Pass the save handler to PolicyDrawer
        />

        <DeleteDrawer
          selectedPolicy={selectedPolicy}
          deleteDrawerVisible={deleteDrawerVisible}
          setDeleteDrawerVisible={setDeleteDrawerVisible}
          setPolicies={(newPolicies) => setPolicies(newPolicies)} // Use the setPolicies to update state after delete
        />
      </Content>
    </Layout>
  );
};

export default Policy;
