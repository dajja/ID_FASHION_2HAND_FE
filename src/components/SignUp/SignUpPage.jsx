import './SignUpPage.scss'
import React from 'react'
import { Button, Form, Input } from 'antd';


const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
    }
};

export default function SignUpPage() {
    return (
        <div className='SignUp'>
            <div className='from-SignUp'>
                <div className='title-signup'>
                    <h2>Sign Up</h2>
                </div>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    validateMessages={validateMessages}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input
                            placeholder=' username'
                            prefix='bagilink.id /'
                        />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="Email"
                        rules={[
                            {
                                required: true,
                                // message: 'Please input your email!',
                                type: 'email',
                            },
                        ]}
                    >
                        <Input placeholder='Email' />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',

                            },
                            {
                                min: 8,
                            }
                        ]}
                    >
                        <Input.Password placeholder='Password' />
                    </Form.Item>

                    <Form.Item
                        label="Confirm Password"
                        name="Confirm password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your confirm password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password placeholder='Confirm Password' />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
                <div className='link-SignIn'>Already have an account?  <b>Sign In</b></div>
            </div>

            <div className='backgroud-image'>
                <p>
                    Welcome to
                    <b>Bagilink.id</b>
                </p>
                <div className='image'><img src="../Image/being-happy.png" alt="" /></div>
            </div>
        </div>

    )
}
