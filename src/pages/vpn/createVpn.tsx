import React from 'react';
import { Form, Input, Button} from 'antd';   
// import { useCreateVpnMutation } from '../../api/apiSlice';
// import { useNavigate } from 'react-router-dom';

// notification 
const CreateVpn: React.FC = () => {
//   const [createVpn] = useCreateVpnMutation();
//   const navigate = useNavigate();

//   const onFinish = async (values: { name: string; server: string; username: string; password: string }) => {
//     try {
//       await createVpn(values).unwrap();
//       notification.success({ message: 'VPN Created Successfully' });
//       navigate('/vpns');
//     } catch {
//       notification.error({ message: 'Error creating VPN' });
//     }
//   };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create VPN</h1>
      <Form layout="vertical" >
        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter the name' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Server" name="server" rules={[{ required: true, message: 'Please enter the server' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please enter the username' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please enter the password' }]}>
          <Input.Password />
        </Form.Item>
        <Button type="primary" htmlType="submit">Create</Button>
      </Form>
    </div>
  );
};

export default CreateVpn;
