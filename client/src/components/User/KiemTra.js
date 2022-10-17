import { Button, Checkbox, Input, message, Table } from "antd";
import { useState } from "react";
import { serverURL } from "../../configs/server.config";

export const KiemTra = () => {
    const [PK_SanphamID, setId] = useState('');
    const [TenSanpham, setTenSanpham] = useState('');
    const [NamSanxuat, setNamSanxuat] = useState('');
    const [Trongluong, setTrongluong] = useState('');
    const [Devo, setDevo] = useState(false);
    const handleChangeID = (e) => {
        setId(e.target.value);
        console.log(PK_SanphamID);
    }
    const handleChangTenSanpham = (e) => {
        setTenSanpham(e.target.value);
    }
    const handleChangeNamSanxuat = (e) => {
        setNamSanxuat(e.target.value);
    }
    const handleChangeTrongluong = (e) => {
        setTrongluong(e.target.value);
    }
    const handleChangeChecked = (e) => {
        setDevo(e.target.checked);
    }
    const [list, setList] = useState([]);
    console.log(1);
    const Add = async () => {
        let count = 0;
        const error = [];
        if (PK_SanphamID === '' || TenSanpham === '' || NamSanxuat === '' || Trongluong === '') {
            count = count + 1;
            error.push('Chưa nhập đủ thông tin');
        }
        if (Trongluong <= 0) {
            count = count + 1;
            error.push('Trọng lượng phải lớn hơn 0');
        }
        const date = new Date();
        if (date.getFullYear() - NamSanxuat > 10 || date.getFullYear() - NamSanxuat < 0) {
            count = count + 1;
            error.push("Năm từ 10 năm trở lại");
        }
        let user = { PK_SanphamID, TenSanpham, NamSanxuat, Trongluong, Devo };
        if (count === 0) {
            setList([...list, user]);
            const url = serverURL + 'company';
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            }
            )
                .then((response) => response.json())
                .then((data) => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            // console.log('response', await response.json());
        }else{
            message.error(error.join(','));
        }
    }
    // const columns = [
    //     {
    //         title: 'ID',
    //         dataIndex: '_id',
    //         key: '_id',
    //     },
    //     {
    //         title: 'Tên sản phẩm',
    //         dataIndex: 'TenSanpham',
    //         key: 'TenSanpham',
    //     },
    //     {
    //         title: 'Năm sản xuất',
    //         dataIndex: 'year',
    //         key: 'year',
    //     },
    //     {
    //         title: 'Trọng lượng',
    //         dataIndex: 'Trongluong',
    //         key: 'Trongluong',
    //     },
    //     {
    //         title: 'Trạng thái',
    //         dataIndex: 'Devo',
    //         key: 'Devo',
    //     },
    // ]

    const columns = [
        {
            title: 'ID',
            dataIndex: 'PK_SanphamID',
            key: 'PK_SanphamID',
        },
        {
            title: 'Tên sản phẩm',
            dataIndex: 'TenSanpham',
            key: 'TenSanpham',
        },
        {
            title: 'Năm sản xuất',
            dataIndex: 'NamSanxuat',
            key: 'NamSanxuat',
        },
        {
            title: 'Trọng lượng',
            dataIndex: 'Trongluong',
            key: 'Trongluong',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'Devo',
            key: 'Devo',
        },
    ]
    return (<>
        <p>Quản lý sản phẩm</p>
        <label>Mã sản phẩm</label>
        <Input
            value={PK_SanphamID}
            onChange={handleChangeID}
        />
        <label>Tên sản phẩm</label>
        <Input
            value={TenSanpham}
            onChange={handleChangTenSanpham}
        />
        <label>Năm sản xuất</label>
        <Input
            value={NamSanxuat}
            onChange={handleChangeNamSanxuat}
        />
        <label>Trọng lượng</label>
        <Input
            value={Trongluong}
            onChange={handleChangeTrongluong}
        />
        <Checkbox checked={Devo} onChange={handleChangeChecked}>Hàng dễ vỡ</Checkbox>
        <Button onClick={Add}>Thêm</Button>
        <Button>Bỏ qua</Button>

        <p>Danh sách sản phẩm</p>
        <Table dataSource={list} columns={columns} />;
    </>
    );
}