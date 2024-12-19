// import React, { useEffect } from 'react';
import { Form, Input, Button} from 'antd';
// import { useGetVpnByIdQuery, useUpdateVpnMutation } from '../../api/apiSlice';
// import { useNavigate, useParams } from 'react-router-dom';

const EditVpn: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const { data: vpn, isLoading } = useGetVpnByIdQuery(id!);
//   const [updateVpn] = useUpdateVpnMutation();
//   const navigate = useNavigate();
  const [form] = Form.useForm();

//   useEffect(() => {
//     if (vpn) form.setFieldsValue(vpn);
//   }, [vpn, form]);

//   const onFinish = async (values: any) => {
//     try {
//       await updateVpn({ id: id!, vpn: values }).unwrap();
//       notification.success({ message: 'VPN Updated Successfully' });
//       navigate('/vpns');
//     } catch {
//       notification.error({ message: 'Error updating VPN' });
//     }
//   };

//   if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit VPN</h1>
      <Form layout="vertical"  form={form}>
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
        <Button type="primary" htmlType="submit">Update</Button>
      </Form>
    </div>
  );
};

export default EditVpn;
