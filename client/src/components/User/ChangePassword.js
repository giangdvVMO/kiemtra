import { Form, Input, Tooltip, Typography } from "antd"
import { useContext, useRef, useState } from "react";

import '../../styles/form.css';
import { checkPassword} from '../../common/validation';
import { UserContext } from "./UserProvider";
import { InfoCircleOutlined, KeyOutlined } from "@ant-design/icons";

export const ChangePassword = ()=>{

    const {user} = useContext(UserContext);
    const {oldPassword,setOldPassword} = useState('');
    const {newPassword, setNewPassword} = useState('');
    const ref = useRef();
    const refButtonSubmit =useRef();
    const refOldPassword = useRef();

    function handleKeyUp(e) {
        if (e.keyCode === 13) {
            console.log('enter');
            refButtonSubmit.current.focus();
            refButtonSubmit.current.click();
        }
    }

    const defaultTrueStatus = {
        status: 'success',
        errorMsg: null
    }
    const [validateOldPassword,setValidateOldPassword] = useState(defaultTrueStatus);
    const [validateNewPassword,setValidateNewPassword] = useState(defaultTrueStatus);
    
    function handleChangeOldPassword(e) {
        setOldPassword(e.target.value);
    }

    function handleChangeNewPassword(e) {
        setNewPassword(e.target.value);
    }

    return (
        <div className="change-password-container">
            <Form
                    ref={ref}
                    onKeyUp={handleKeyUp}
                    className='form'
                    name="basic"
                    layout='vertical'
                    initialValues={{ remember: true }}
                    autoComplete="off"
                >
                    
                    <Form.Item
                        label="Mật khẩu cũ"
                        name="old-password"
                        rules={[{ required: true, message: 'Hãy nhập mật khẩu cũ!' }]}
                        validateStatus={validateOldPassword.status}
                        help={validateOldPassword.errorMsg}
                    >
                        <Input
                            ref={refOldPassword}
                            className='input-login'
                            placeholder="Nhập mật khẩu cũ"
                            autoFocus={true}
                            prefix={<KeyOutlined className='input-icon' />}
                            suffix={
                                <Tooltip title="Mật khẩu chứa cả số, chữ nhiều hơn 8 kí tự">
                                    <InfoCircleOutlined className='input-icon opacity-less'
                                    />
                                </Tooltip>
                            }
                            value={oldPassword}
                            onChange={handleChangeOldPassword}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Mật khẩu mới"
                        name="new-password"
                        rules={[{ required: true, message: 'Hãy nhập mật khẩu mới!' }]}
                        validateStatus={validateNewPassword.status}
                        help={validateNewPassword.errorMsg}
                    >
                        <Input.Password
                            className='input-login'
                            prefix={<KeyOutlined className='input-icon' />}
                            onChange={handleChangeNewPassword}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Nhập lại mật khẩu mới"
                        name="new-password"
                        rules={[{ required: true, message: 'Hãy nhập mật khẩu lại mật khẩu mới!' }]}
                        validateStatus={validateNewPassword.status}
                        help={validateNewPassword.errorMsg}
                    >
                        <Input.Password
                            className='input-login'
                            prefix={<KeyOutlined className='input-icon' />}
                            onChange={handleChangeNewPassword}
                        />
                    </Form.Item>

                </Form>
        </div>
    )
}