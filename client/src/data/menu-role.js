import { AlertOutlined, BankOutlined, BookOutlined, ContactsOutlined, CopyOutlined, HomeOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export const MenuRole = {
    user: [{
        label: <Link to='home'>Trang chủ</Link>,
        icon: <HomeOutlined />,
        key: 'home'
    },
    {
        label: <Link to='about'>Về chúng tôi</Link>,
        icon: <AlertOutlined />,
        key: 'about'
    }],
    admin: [
        {
            label: <Link to='home'>Trang chủ</Link>,
            icon: <HomeOutlined />,
            key: 'home'
        },
        {
            label: <Link to='user-manager'>Quản lý người dùng</Link>,
            icon: <UsergroupAddOutlined />,
            key: 'usermanagerment'
        },
        {
            label: <Link to='student-manager'>Quản lý sinh viên</Link>,
            icon: <ContactsOutlined />,
            key: 'studentmanagerment'
        },
        {
            label: <Link to='company-manager'>Quản lý doanh nghiệp</Link>,
            icon: <BankOutlined />,
            key: 'companymanagerment'
        },
        {
            label: <Link to='hire-manager'>Quản lý bài đăng tuyển dụng</Link>,
            icon: <CopyOutlined />,
            key: 'hiremanagerment'
        },
        {
            label: <Link to='news-manager'>Quản lý bài đăng tin tức</Link>,
            icon: <BookOutlined />,
            key: 'newsmanagerment'
        },
        {
            label: <Link to='about'>Về chúng tôi</Link>,
            icon: <AlertOutlined />,
            key: 'about'
        }
    ],
    company: [

    ],
    student: [

    ]
}