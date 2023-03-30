import './SignInPage.scss'
import React from 'react'
import { Button, Form, Input } from 'antd';


const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

export default function SignInPage() {
    return (
        <div className='SignIn'>
            <div className='from-SignIn'>
                <div className='title-signin'>
                    <h2>Sign In</h2>
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

                    <div className='Forgot-password'>
                        Forgot Password?
                    </div>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
                <div className='link-SignUp'>Not registered yet? <b>Create an account</b></div>
            </div>

            <div className='backgroud-image'>
                <p>
                    Everything you are.
                    In one simple link.
                </p>
                <div className='image'><img src="../Image/party.png" alt="" /></div>
            </div>
        </div>

    )
}
