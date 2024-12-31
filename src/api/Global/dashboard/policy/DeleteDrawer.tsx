
import React from "react";
import { Drawer, Button, message } from "antd";

interface Props {
  selectedPolicy: any;
  deleteDrawerVisible: boolean;
  setDeleteDrawerVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setPolicies: React.Dispatch<React.SetStateAction<any[]>>;
}

const DeleteDrawer: React.FC<Props> = ({
  selectedPolicy,
  deleteDrawerVisible,
  setDeleteDrawerVisible,
  setPolicies,
}) => {
  const handleDelete = () => {
    setPolicies((prevPolicies) =>
      prevPolicies.filter((policy) => policy.key !== selectedPolicy.key)
    );
    message.success("Policy deleted successfully!");
    setDeleteDrawerVisible(false);
  };

  return (
    <Drawer
      title="Delete Policy"
      visible={deleteDrawerVisible}
      onClose={() => setDeleteDrawerVisible(false)}
      width={400}
      bodyStyle={{
        backgroundColor: "#1f2937", 
        color: "white", 
      }}
      headerStyle={{
        backgroundColor: "#111827", 
        color: "white", 
      }}
      footer={
        <div style={{ textAlign: "right", backgroundColor: "#1f2937" }}>
          <Button
            onClick={() => setDeleteDrawerVisible(false)}
            style={{
              marginRight: 8,
              backgroundColor: "#374151", 
              color: "white", 
              borderColor: "#374151", 
            }}
          >
            Cancel
          </Button>
          <Button
            type="primary"
            onClick={handleDelete}
            style={{
              backgroundColor: "#dc2626", 
              borderColor: "#dc2626",
            }}
          >
            Delete
          </Button>
        </div>
      }
    >
      <p style={{ color: "white" }}>
        Are you sure you want to delete the policy: <strong>{selectedPolicy?.name}</strong>?
      </p>
      <p style={{ color: "white" }}>This action cannot be undone.</p>
    </Drawer>
  );
};

export default DeleteDrawer;
