import './ForgotPasswordPage.scss'
import React from 'react'
import { Button, Form, Input } from 'antd';


const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

export default function ForgotPassword() {
    return (
        <div className='ForgotPassword'>
            <div className='from-Forgot'>
                <div className='title-forgot'>
                    <h2>Forgot Password</h2>
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
                        label="Email"
                        name="Email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Email!',
                            },
                        ]}
                    >
                        <Input
                            placeholder='Email'
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
                <div className='link-SignUp'>Back to Sign In</div>
            </div>

            <div className='backgroud-image'>
                <p>
                    Don’t worry
                    we’ll help you.
                </p>
                <div className='image'><img src="../Image/searching.png" alt="" /></div>
            </div>
        </div>

    )
}