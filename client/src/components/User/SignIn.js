import { InfoCircleOutlined, UserOutlined, EyeInvisibleOutlined, EyeTwoTone, KeyOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Tooltip, Typography } from 'antd';
import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/form.css';

const SignIn = () => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const ref = useRef();
    const refButtonSubmit = useRef();

    function handleChangeUserName(e) {
        setUser((preUser) => { return { ...preUser, username: e.target.value } });
    }

    function handleChangePassword(e) {
        setUser((preUser) => { return { ...preUser, password: e.target.value } });
    }

    function onFinish(e) {

    }
    function onFinishFailed(e) {

    }

    function onGenderChange(e) {

    }

    function handleKeyUp(e) {
        if (e.keyCode == 13) {
            console.log('enter');
            refButtonSubmit.current.focus();
            refButtonSubmit.current.click();
        }
    }

    const navigate = useNavigate();
    function handleSubmit(e) {
        console.log("submit");
        ref.current.submit();
        navigate("/");
    }
    return (
        <div className='grid-container'>
            <div className='img-side' ></div>
            <div className='flex-container'>
                <Form
                    ref={ref}
                    onKeyUp={handleKeyUp}
                    className='form'
                    name="basic"
                    layout='vertical'
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"

                >
                    <Typography type="secondary" className='title m-b-50px'>ĐĂNG NHẬP</Typography>
                    <Form.Item
                        label="Tên đăng nhập"
                        name="username"
                        rules={[{ required: true, message: 'Hãy nhập tên đăng nhập!' }]}
                        tooltip={{ title: 'Tên đăng nhập là duy nhất', icon: <InfoCircleOutlined /> }}
                    >
                        <Input
                            className='input-login'
                            placeholder="Nhập tên đăng nhập"
                            autoFocus={true}
                            prefix={<UserOutlined className='input-icon' />}
                            suffix={
                                <Tooltip title="Tên đăng nhập là duy nhất">
                                    <InfoCircleOutlined className='input-icon opacity-less'
                                    />
                                </Tooltip>
                            }
                            value={user.username}
                            onChange={handleChangeUserName}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Hãy nhập password!' }]}
                        tooltip={{ title: 'Password bao gồm 8 kí tự trở lên, có cả chữ và số! ', icon: <InfoCircleOutlined /> }}
                    >
                        <Input.Password
                            className='input-login'
                            placeholder="Hãy nhập mật khẩu"
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            prefix={<KeyOutlined className='input-icon' />}
                            onChange={handleChangePassword}
                        />
                    </Form.Item>
                    <Form.Item name="remember">
                        <Checkbox>Remember me</Checkbox>
                        <Link to='/forgot-password'>Quên mật khẩu</Link>
                    </Form.Item>
                    <Form.Item name="register">
                        Bạn chưa có tài khoản? <Link to='/register'>Đăng ký</Link>
                    </Form.Item>
                    <Form.Item>
                        <Button type='submit' ref={refButtonSubmit} name='button-submit' className='button submit' onSubmit={handleSubmit} onClick={handleSubmit} onKeyUp={handleKeyUp}>Submit</Button>
                        <Button type='reset' className='button reset'>Reset</Button>
                    </Form.Item>
                </Form>
            </div>
        </div >
    );
}

export default SignIn;