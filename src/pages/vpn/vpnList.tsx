import React from 'react';
import { Table, Button, Space } from 'antd';
// import { useGetVpnsQuery, useDeleteVpnMutation } from '../../api/apiSlice';
import { useNavigate } from 'react-router-dom';

const VpnList: React.FC = () => {
//   const { data: vpns, isLoading } = useGetVpnsQuery();
//   const [deleteVpn] = useDeleteVpnMutation();
  const navigate = useNavigate();

//   const handleDelete = async (id: string) => {
//     try {
//       await deleteVpn(id).unwrap();
//       notification.success({ message: 'VPN Deleted' });
//     } catch {
//       notification.error({ message: 'Error deleting VPN' });
//     }
//   };


  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Server',
      dataIndex: 'server',
      key: 'server',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: any) => (
        <Space>
          <Button onClick={() => navigate(`/vpns/edit/${record.id}`)}>Edit</Button>
          <Button danger >Delete</Button>
        </Space>
      ),
    },
  ];


  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">VPN List</h1>
      <Button type="primary" onClick={() => navigate('/vpns/create')} className="mb-4">
        Add VPN
      </Button>
      <Table dataSource={[]} columns={columns} rowKey="id" />
    </div>
  );
};

export default VpnList;
