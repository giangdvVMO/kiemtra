import { InfoCircleOutlined, MailOutlined, PhoneOutlined, UserOutlined, EyeInvisibleOutlined, EyeTwoTone, KeyOutlined } from '@ant-design/icons';
import { Button, DatePicker, Form, Input, Select, Tooltip, Typography } from 'antd';
import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../../styles/form.css';
import { serverURL } from '../../configs/server.config';

const SignUp = () => {
    const [account, setAccount] = useState({
        username: '',
        password: '',
        fullname: '',
        email: '',
        birthday: '',
        phone: '',
        type: ''
    });

    const ref = useRef();
    const refButtonSubmit = useRef();
    //Autocomplete list type: 
    const options = [
        { value: 'company', label: 'Doanh nghiệp' },
        { value: 'student', label: 'Sinh viên' },
    ];

    function handleChangeUserName(e) {
        setAccount((preUser) => { return { ...preUser, username: e.target.value } });
    }

    function handleChangePassword(e) {
        setAccount((preUser) => { return { ...preUser, password: e.target.value } });
    }

    function handleChangeFullName(e) {
        setAccount((preUser) => { return { ...preUser, fullname: e.target.value } });
    }

    function handleChangeBirthday(date, dateString) {
        setAccount((preUser) => { return { ...preUser, birthday: dateString } });
    }

    function handleChangeEmail(e) {
        console.log(e.target.value);
        setAccount((preUser) => { return { ...preUser, email: e.target.value } });
    }

    function handleChangePhone(e) {
        setAccount((preUser) => { return { ...preUser, phone: e.target.value } });
    }

    function handleChangeSelect(value) {
        setAccount((preUser) => { return { ...preUser, type: value } });
    }

    function onFinish(e) {

    }
    function onFinishFailed(e) {

    }

    function onGenderChange(e) {

    }

    function handleKeyUp(e) {
        if (e.keyCode === 13) {
            console.log('enter');
            refButtonSubmit.current.focus();
            refButtonSubmit.current.click();
        }
    }

    const navigate = useNavigate();
    async function handleSubmit(e) {
        console.log("submit");
        ref.current.submit();
        console.log(account);
        const url = serverURL + '/register';
        const response = await axios.post(url, account);
        // navigate("/");
    }
    return (
        <div className='center-container'>
            <div className='flex-container register'>
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

                    <Typography type='secondary' className='title m-x-30px'>ĐĂNG KÝ</Typography>
                    <Form.Item
                        label="Tên đăng nhập"
                        name="username"
                        rules={[{ required: true, message: 'Hãy nhập Tên đăng nhập!' }]}
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
                            value={account.username}
                            onChange={handleChangeUserName}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Mật khẩu"
                        name="password"
                        rules={[{ required: true, message: 'Hãy nhập mật khẩu!' }]}
                        tooltip={{ title: 'mật khẩu bao gồm 8 kí tự trở lên, có cả chữ và số! ', icon: <InfoCircleOutlined /> }}
                    >
                        <Input.Password
                            className='input-login'
                            placeholder="Nhập mật khẩu"
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            prefix={<KeyOutlined className='input-icon' />}
                            onChange={handleChangePassword}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Họ và tên"
                        name="fullname"
                        rules={[{ required: true, message: 'Hãy nhập họ và tên!' }]}
                    >
                        <Input
                            className='input-login'
                            placeholder="Nhập họ và tên"
                            autoFocus={true}
                            value={account.fullname}
                            onChange={handleChangeFullName}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Hãy nhập Email!' }]}
                        tooltip={{ title: 'Email là duy nhất', icon: <InfoCircleOutlined /> }}
                    >
                        <Input
                            className='input-login'
                            placeholder="Nhập Email"
                            type='email'
                            autoFocus={true}
                            prefix={<MailOutlined className='input-icon' />}
                            value={account.email}
                            onChange={handleChangeEmail}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Số điện thoại"
                        name="phone"
                        rules={[{ required: true, message: 'Hãy nhập Số điện thoại!' }]}
                    >
                        <Input
                            className='input-login'
                            placeholder="Nhập Số điện thoại"
                            autoFocus={true}
                            prefix={<><PhoneOutlined className='input-icon' /><span>+84 </span></>}
                            value={account.phone}
                            onChange={handleChangePhone}
                        />
                    </Form.Item>
                    <div className='two-colums'>
                        <Form.Item
                            label="Ngày sinh"
                            name="birthday"
                            rules={[{ required: true, message: 'Hãy nhập Ngày sinh!' }]}
                        >
                            <DatePicker className='birthday-input'
                                autoFocus={true}
                                value={account.birthday}
                                onChange={handleChangeBirthday} />
                        </Form.Item>
                        <Form.Item name='type' label="Đối tượng"
                            rules={[{ required: true }]}
                            tooltip={{ title: 'Chỉ được chọn 1', icon: <InfoCircleOutlined /> }}>
                            <Select
                                className='select'
                                placeholder="Bạn là ai?"
                                allowClear
                                onChange={handleChangeSelect}
                                options={options}
                                popupClassName='dropdown'
                            >
                            </Select>
                        </Form.Item>
                    </div>
                    <Form.Item name="register">
                        Bạn đã có tài khoản? <Link to='/sign-in'>Đăng nhập</Link>
                    </Form.Item>
                    <Form.Item name='submitframe'>
                        <Button type='submit' ref={refButtonSubmit} name='button-submit' className='button submit' onSubmit={handleSubmit} onClick={handleSubmit} onKeyUp={handleKeyUp}>Submit</Button>
                        <Button type='reset' className='button reset'>Reset</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default SignUp;