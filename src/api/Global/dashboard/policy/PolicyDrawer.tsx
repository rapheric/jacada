import React, { useState, useEffect } from "react";
import { Drawer, Button, Form, Input, Switch, Select, Row, Col, message } from "antd";

interface Props {
  selectedPolicy: any;
  editDrawerVisible: boolean;
  setEditDrawerVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setPolicies: React.Dispatch<React.SetStateAction<any[]>>;
}

const { Option } = Select;

const PolicyDrawer: React.FC<Props> = ({ selectedPolicy, editDrawerVisible, setEditDrawerVisible, setPolicies }) => {
  const [form] = Form.useForm();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (selectedPolicy) {
      form.setFieldsValue({
        name: selectedPolicy.name,
        active: selectedPolicy.active,
        sources: selectedPolicy.sources,
        direction: selectedPolicy.direction,
        destinations: selectedPolicy.destinations,
        protocol: selectedPolicy.protocol,
        ports: selectedPolicy.ports,
        posture: selectedPolicy.posture,
      });
      setIsEditing(true);
    } else {
      form.resetFields();
      setIsEditing(false);
    }
  }, [selectedPolicy, form]);

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      if (isEditing) {
        setPolicies((prevPolicies) =>
          prevPolicies.map((policy) =>
            policy.key === selectedPolicy.key ? { ...policy, ...values } : policy
          )
        );
        message.success("Policy updated successfully!");
      } else {
        const newPolicy = { ...values, key: Date.now().toString() };
        setPolicies((prevPolicies) => [...prevPolicies, newPolicy]);
        message.success("Policy created successfully!");
      }
      setEditDrawerVisible(false);
    });
  };

  return (
    <Drawer
      title={isEditing ? "Edit Policy" : "Create Policy"}
      visible={editDrawerVisible}
      onClose={() => setEditDrawerVisible(false)}
      width={500}
      footer={
        <div style={{ textAlign: "right" }}>
          <Button onClick={() => setEditDrawerVisible(false)} style={{ marginRight: 8 }}>
            Cancel
          </Button>
          <Button type="primary" onClick={handleSubmit}>
            {isEditing ? "Save Changes" : "Create Policy"}
          </Button>
        </div>
      }
    >
      <Form form={form} layout="vertical">
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="name"
              label="Policy Name"
              rules={[{ required: true, message: "Please enter a policy name" }]}
            >
              <Input placeholder="Policy Name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="active" label="Active" valuePropName="checked">
              <Switch />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="posture" label="Posture" rules={[{ required: true }]}>
              <Select placeholder="Select posture">
                <Option value="Allow">Allow</Option>
                <Option value="Deny">Deny</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="sources"
              label="Sources"
              rules={[{ required: true, message: "Please enter source IPs" }]}
            >
              <Input placeholder="Source IPs (e.g., 192.168.1.1)" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="destinations"
              label="Destinations"
              rules={[{ required: true, message: "Please enter destination IPs" }]}
            >
              <Input placeholder="Destination IPs (e.g., 192.168.2.1)" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="direction"
              label="Direction"
              rules={[{ required: true, message: "Please select direction" }]}
            >
              <Select placeholder="Select direction">
                <Option value="Inbound">Inbound</Option>
                <Option value="Outbound">Outbound</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="protocol"
              label="Protocol"
              rules={[{ required: true, message: "Please select protocol" }]}
            >
              <Select placeholder="Select protocol">
                <Option value="TCP">TCP</Option>
                <Option value="UDP">UDP</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="ports"
              label="Ports"
              rules={[{ required: true, message: "Please enter ports" }]}
            >
              <Input placeholder="Ports (e.g., 80, 443)" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
};

export default PolicyDrawer;
