import React, { Component } from 'react';

// Ant Design
import { Tooltip, Button } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';


export default class Register extends Component {

    render() {
        return (
            <div className="register">

                <Tooltip>
                    <Button type="text" icon={<UserAddOutlined />} />
                </Tooltip>
            </div>
        );
    }
}