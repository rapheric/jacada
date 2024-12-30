import React from "react";
import { Table, Button, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

interface Policy {
  key: string;
  name: string;
  active: boolean;
  sources: string;
  direction: string;
  destinations: string;
  protocol: string;
  ports: string;
  posture: string;
}

interface Props {
  policies: Policy[];
  searchQuery: string;
  showTenRows: boolean;
  handleEditPolicy: (policy: Policy) => void;
  handleDeletePolicy: (policy: Policy) => void;
}

const PolicyTable: React.FC<Props> = ({
  policies,
  searchQuery,
  showTenRows,
  handleEditPolicy,
  handleDeletePolicy,
}) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Active',
      dataIndex: 'active',
      key: 'active',
      render: (active: boolean) => (active ? 'Yes' : 'No'),
    },
    {
      title: 'Sources',
      dataIndex: 'sources',
      key: 'sources',
    },
    {
      title: 'Direction',
      dataIndex: 'direction',
      key: 'direction',
      render: (direction: string) => (
        <span>{direction === 'Inbound' ? '← Inbound' : '→ Outbound'}</span>
      ),
    },
    {
      title: 'Destinations',
      dataIndex: 'destinations',
      key: 'destinations',
    },
    {
      title: 'Protocol',
      dataIndex: 'protocol',
      key: 'protocol',
    },
    {
      title: 'Ports',
      dataIndex: 'ports',
      key: 'ports',
    },
    {
      title: 'Posture Choices',
      dataIndex: 'posture',
      key: 'posture',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: Policy) => (
        <Space size="middle">
          <Button icon={<EditOutlined />} onClick={() => handleEditPolicy(record)} />
          <Button icon={<DeleteOutlined />} onClick={() => handleDeletePolicy(record)} />
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={policies.filter(policy => policy.name.toLowerCase().includes(searchQuery.toLowerCase()))}
      pagination={showTenRows ? { pageSize: 10 } : false}
    />
  );
};

export default PolicyTable;
