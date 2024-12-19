import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const Register: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg max-w-lg w-full">
        <Title level={3} className="text-center mb-4">
          Create an Account
        </Title>
        <Form
          form={form}
          layout="vertical"
          autoComplete="off"
          className="space-y-4"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please enter your username' }]}
          >
            <Input className="h-10 rounded-lg"
             placeholder="Enter your username" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email' },
            ]}
          >
            <Input className="h-10 rounded-lg"
            placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please enter your password' }]}
          >
            <Input.Password className="h-10 rounded-lg"
            placeholder="Enter your password" />
          </Form.Item>

          <Form.Item>
            <Button  className="h-10 w-full bg-blue-600 hover:bg-blue-700"
            type="primary" htmlType="submit" block >
              Sign Up
            </Button>
          </Form.Item>
        </Form>
        <div className="text-center mt-4">
          Already have an account?{' '}
          <Button 
           type="link" onClick={() => navigate('/dashboard')}>
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;


