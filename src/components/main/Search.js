import React, { Component } from 'react';

// Ant Design
import { Tooltip, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';


export default class Search extends Component {

    render() {
        return (
            <div className="search">
                <Tooltip>
                    <Button type="text" size="middle" icon={<SearchOutlined />}/>
                </Tooltip>
            </div>
        );
    }
}