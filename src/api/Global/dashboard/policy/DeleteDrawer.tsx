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
      footer={
        <div style={{ textAlign: "right" }}>
          <Button onClick={() => setDeleteDrawerVisible(false)} style={{ marginRight: 8 }}>
            Cancel
          </Button>
          <Button type="primary" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      }
    >
      <p>Are you sure you want to delete the policy: <strong>{selectedPolicy?.name}</strong>?</p>
      <p>This action cannot be undone.</p>
    </Drawer>
  );
};

export default DeleteDrawer;
