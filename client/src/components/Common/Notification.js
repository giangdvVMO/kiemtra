import { useState } from "react";
import { BellTwoTone } from '@ant-design/icons'
import { Badge } from "antd";
import '../../styles/notification.css';


export const Notification = () => {
    const [count, setCount] = useState(10);
    return (
        <div className="notification">
            <Badge count={1000} overflowCount={99}>
                <BellTwoTone className='icon-bell' />
            </Badge>
        </div>
    )
}