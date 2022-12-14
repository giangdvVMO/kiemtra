import { BulbOutlined, MailOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Form, Input, message, Select } from "antd";
import { useContext, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";

import { serverURL } from "../../configs/server.config";
import { UserContext } from "../User/UserProvider"
import '../../styles/form.css'
import '../../styles/my-account.css'
import { universities } from "../../data/university-list";
const { Option } = Select;


export const StudentProfile = ()=>{
const {user, changeUser} = useContext(UserContext);
    const [isEdit, setIsEdit] = useState(false);

    const role = user?user.role:'student';
    let users= user?user:{
        _id: 1,
        username: "giang",
        password: "12345678",
        fullname: "giang",
        email: "123@gmail.com",
        birthday: new Date("2000-12-12"),
        phone: "+840866023111",
        role: "student",
        status: 1
    }
    // changeUser(users);
    let student = {
        _id:1,
        phone: "+840938927810",
        email: "giang@vmodev.com",
        cccd: "19378273828",
        address: "HP",
        studentid: "18A100100",
        university: "University",
        faculty: "English",
        course: "2012-2020",
        GPA: 3.5,
        status: true,
        avatar: ''
    }
    // const date = new Date();
    // console.log(date.toISOString());
    // const x = {
    //     _id: users._id,
    //     username: users.username,
    //     password: users.password,
    //     fullname: users.fullname,
    //     email: users.email,
    //     birthday: users.birthday,
    //     phone: users.phone,
    //     role: users.role,
    //     status: users.status
    // }
    const [account, setAccount] = useState(users);
    const [updateStudent, setUpdateStudent] = useState(student)
    console.log(account);
    const defaultTrueStatus = {
        status: 'success',
        errorMsg: null
    }
    const [validateFullname,setValidateFullname] = useState(defaultTrueStatus);
    const [validatePhone,setValidatePhone] = useState(defaultTrueStatus);
    const [validateEmail,setValidateEmail] = useState(defaultTrueStatus);
    const [validateCCCD,setValidateCCCD] = useState(defaultTrueStatus);
    const [validateAddress,setValidateAddress] = useState(defaultTrueStatus);
    const [validateIDSV,setValidateIDSV] = useState(defaultTrueStatus);
    const [validateSchool,setValidateSchool] = useState(defaultTrueStatus);
    const [validateFaculty,setValidateFaculty] = useState(defaultTrueStatus);
    const [validateClass,setValidateClass] = useState(defaultTrueStatus);
    const [validateCourse,setValidateCourse] = useState(defaultTrueStatus);
    const [validateGPA,setValidateGPA] = useState(defaultTrueStatus);

    const ref = useRef();
    const refUserName = useRef();
    const refButtonSubmit = useRef();
    const navigate = useNavigate();

    async function handleEdit(e){
        setIsEdit(true);
        return;
    }

    async function handleCancel(e){
        setIsEdit(false);
        return;
    }

    async function handleSave(e) {
        ref.current.submit();
        let count =0;
        console.log(count);
        if(count===0){
            account.phone = '+84'+account.phone;
            const url = serverURL + 'auth/register';
            try{
                // const response = await axios.post(url, account);
                const response = await fetch(url,{
                    method: 'PATCH',
                    body: JSON.stringify(account)
                }
                );

                console.log(response);
                message.success("B???n ???? s???a th??nh c??ng!")
                navigate('/');
            }
            catch(err){
                console.log(err);
                message.error("???? c?? l???i x???y ra!");
            }
        }
        setIsEdit(false);
        return;
    }

    const renderButtonGroup = ()=>{
        if(!isEdit){
            return (
                <Button type='submit' className='button edit-btn' onClick={handleEdit}>S???a</Button>
            )
        }else{
            return (
                <>
                <Button type='submit' className='button save-btn' onClick={handleSave}>L??u</Button>
                <Button type='reset' className='button cancel-btn' onClick={handleCancel}>H???y</Button>
                </>
            )
        }
    }

    const renderStatus = ()=>{
        if(account.status){
            return <div className='active'>???? duy???t</div>
        }else{
            return <div className='inactive'>Ch??? duy???t</div>
        }
    }

    function handleKeyUp(e) {
        if (e.keyCode === 13) {
            console.log('enter');
            refButtonSubmit.current.focus();
            refButtonSubmit.current.click();
        }
    }

    function handleChangeFullName(e) {
        setAccount((preUser) => { return { ...preUser, fullname: e.target.value } });
    }

    function handleChangeEmail(e) {
        console.log(e.target.value);
        setAccount((preUser) => { return { ...preUser, email: e.target.value } });
    }

    function handleChangePhone(e) {
        setAccount((preUser) => { return { ...preUser, phone: e.target.value } });
    }

    const [selectedItems, setSelectedItems] = useState('');
    const OPTIONS = universities;

    return (<div className='swapper-container'>
        <div className='introduce-frame'>
            <div className='background-image'></div>
            <div className='introduce-bottom'>
                <Avatar className='avatar' size= {120} icon={<UserOutlined />} />
                <div className='introduce-fullname'>{account.fullname}</div>
            </div>
        </div>
        <div className='detail-swapper'>
            <p className='title-account'>Th??ng tin sinh vi??n</p>
            <div className='underline'></div>
            <div className='body'>
            <Form
                    ref={ref}
                    onKeyUp={handleKeyUp}
                    className='form'
                    name="basic"
                    layout='vertical'
                    // initialValues={{ ...account }}
                    autoComplete="off"
                >
                    <div className='two-colums'>
                        <Form.Item
                            label="H??? v?? t??n"
                            name="fullname"
                            initialValue={account.fullname}
                            validateStatus={validateFullname.status}
                            help={validateFullname.errorMsg}
                        >
                            <Input
                                disabled={!isEdit}
                                className='input-login max-width'
                                placeholder="Nh???p h??? v?? t??n"
                                autoFocus={true}
                                value={account.fullname}
                                onChange={handleChangeFullName}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="email"
                            validateStatus={validateEmail.status}
                            help={validateEmail.errorMsg}
                        >
                            <Input
                                className='input-login max-width'
                                placeholder="Nh???p Email"
                                type='email'
                                disabled={!isEdit}
                                autoFocus={true}
                                prefix={<MailOutlined className='input-icon' />}
                                value={account.email}
                                onChange={handleChangeEmail}
                            />
                        </Form.Item>

                        <Form.Item
                            label="S??? ??i???n tho???i"
                            name="phone"
                            validateStatus={validatePhone.status}
                            help={validatePhone.errorMsg}
                        >
                            <Input
                                className='input-login max-width'
                                placeholder="Nh???p S??? ??i???n tho???i"
                                autoFocus={true}
                                disabled={!isEdit}
                                prefix={<><PhoneOutlined className='input-icon' /><span>+84 </span></>}
                                value={account.phone}
                                onChange={handleChangePhone}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Tr?????ng"
                            name="university"
                            // validateStatus={validateUniversity.status}
                            // help={validateUniversity.errorMsg}
                        >
                            <Select
                                showSearch
                                value={selectedItems}
                                optionFilterProp="children"
                                onChange={setSelectedItems}
                                style={{ width: '100%' }}
                                filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                                >
                                {OPTIONS.map(item => (
                                    <Option key={item} value={item}>
                                    {item}
                                    </Option>
                                ))}
                                </Select>
                        </Form.Item>
                        <Form.Item
                            label="S??? ??i???n tho???i"
                            name="phone"
                            validateStatus={validatePhone.status}
                            help={validatePhone.errorMsg}
                        >
                            <Input
                                className='input-login max-width'
                                placeholder="Nh???p S??? ??i???n tho???i"
                                autoFocus={true}
                                disabled={!isEdit}
                                prefix={<><PhoneOutlined className='input-icon' /><span>+84 </span></>}
                                value={account.phone}
                                onChange={handleChangePhone}
                            />
                        </Form.Item>
                        <Form.Item name='status' label="Tr???ng th??i"
                                >
                                    <div className='status'>{
                                        renderStatus()
                                    }</div>
                        </Form.Item>
                        <Form.Item>
                            <div>
                                <BulbOutlined color="yellow" size={40}/>
                                <span>H??y c???p nh???t th??ng tin ?????y ????? ????? c?? th??? s??? d???ng c??c ch???c n??ng c???a h??? th???ng!</span>
                            </div>
                        </Form.Item>
                        <Form.Item>
                            <div className='group-button'>
                                {
                                    renderButtonGroup()
                                }
                            </div>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </div>
        </div>)
}