import { Space, Table } from 'antd';
import { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from './UserProvider';

export const AccountAdmin = ()=>{
    const {user} = useContext(UserContext);
    const listUser = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ];
      
      const columns = [
        {
          title: '',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
            title: 'Hành động',
            key: 'action',
            render: (_, record) => (
                <Link to={record.name}>Xem chi tiết</Link>
            ),
          },
      ];
      
    return (
        <>
            <div className='container-filter'>

            </div>
            <Table dataSource={listUser} columns={columns} />;
        </>
        
    )
}