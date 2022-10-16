import { Button, Checkbox, DatePicker, Input, Table } from "antd";
import { useState } from "react";
import { serverURL } from "../../configs/server.config";

export const KiemTra = () => {
    const [_id, setId] = useState('');
    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [weight, setWeight] = useState('');
    const [devo, setDevo] = useState(false);
    const handleChangeID = (e) => {
        setId(e.target.value);
        console.log(_id);
    }
    const handleChangName = (e) => {
        setName(e.target.value);
    }
    const handleChangeYear = (e) => {
        setYear(e.target.value);
    }
    const handleChangeWeight = (e) => {
        setWeight(e.target.value);
    }
    const handleChangeChecked = (e) => {
        setDevo(e.target.checked);
    }
    const [list, setList] = useState([
        {
            _id: '1',
            name: 'abc',
            year: '2013',
            weight: '20',
            devo: false,
        }
    ]);
    console.log(1);
    const Add = async () => {
        let count = 0;
        if (_id === '' || name === '' || year === '' || weight === '') {
            count = count + 1;
            console.log('Chưa nhập đủ thông tin');
        }
        if (_id <= 0) {
            count = count + 1;
            console.log('Trọng lượng phải lớn hơn 0');
        }
        const date = new Date();
        if (date.getFullYear() - year > 10 || date.getFullYear() - year < 0) {
            count = count + 1;
            console.log("Năm từ 10 năm trở lại");
        }
        let user = { _id, name, year, weight, devo };
        console.log("user", user);
        if (count === 0) {
            setList([...list, user]);
            const url = serverURL + 'user/create-product';
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
        }
    }
    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            key: '_id',
        },
        {
            title: 'Tên sản phẩm',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Năm sản xuất',
            dataIndex: 'year',
            key: 'year',
        },
        {
            title: 'Trọng lượng',
            dataIndex: 'weight',
            key: 'weight',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'devo',
            key: 'devo',
        },
    ]
    return (<>
        <p>Quản lý sản phẩm</p>
        <label>Mã sản phẩm</label>
        <Input
            value={_id}
            onChange={handleChangeID}
        />
        <label>Tên sản phẩm</label>
        <Input
            value={name}
            onChange={handleChangName}
        />
        <label>Năm sản xuất</label>
        <Input
            value={year}
            onChange={handleChangeYear}
        />
        <label>Trọng lượng</label>
        <Input
            value={weight}
            onChange={handleChangeWeight}
        />
        <Checkbox checked={devo} onChange={handleChangeChecked}>Hàng dễ vỡ</Checkbox>
        <Button onClick={Add}>Thêm</Button>
        <Button>Bỏ qua</Button>

        <p>Danh sách sản phẩm</p>
        <Table dataSource={list} columns={columns} />;
    </>
    );
}