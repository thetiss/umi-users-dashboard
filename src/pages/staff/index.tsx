import React, { PureComponent } from 'react';
import { Button } from "antd";
import Protable from '@ant-design/pro-table';
import type { ProColumnType } from '@ant-design/pro-table';
import {ISingleStaffInfo} from './model';

const columns: ProColumnType<ISingleStaffInfo>[] = [
    {
        title: 'ID',
        dataIndex: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: '邮箱',
        dataIndex: 'email',
    },    
    {
      title: '创建时间',
      dataIndex: 'create_time',
      valueType: 'text',
    },
    {
      title: '更新时间',
      dataIndex: 'update_time',
      valueType: 'text',
    },
    {
      title: 'Action',
      key: 'action',
      sorter: true,
      valueType: 'option',
      render: () => [
        <a key="delete">Delete</a>,
        <a key="link" className="ant-dropdown-link">
          More actions
        </a>,
      ],
    },
  ];
const staticData = [
    {
    id: 5867,
    name: "VS承担科技城",
    email: "",
    create_time: "2021-03-11T04:31:58Z",
    update_time: "2021-03-11T04:31:58Z",
    status: 1
    },
    {
    id: 5866,
    name: "76iiii",
    email: "676",
    create_time: "2021-03-10T18:13:05Z",
    update_time: "2021-03-11T09:27:16Z",
    status: 127
    },
    {
    id: 5865,
    name: "姓名不要数字",
    email: "22",
    create_time: "2021-03-10T18:12:44Z",
    update_time: "2021-03-11T03:14:39Z",
    status: 127
    },
    {
    id: 5863,
    name: "好了真的",
    email: "11",
    create_time: "-0001-11-29T15:54:17Z",
    update_time: "2021-03-11T03:00:50Z",
    status: 11
    },
    {
    id: 5859,
    name: "8",
    email: "8",
    create_time: "-0001-11-29T15:54:17Z",
    update_time: "2021-03-10T03:30:01Z",
    status: 8
    },
    {
    id: 5855,
    name: "10",
    email: "1",
    create_time: "2021-03-08T16:22:48Z",
    update_time: "2021-03-10T09:39:39Z",
    status: 1
    },
    {
    id: 5853,
    name: "133",
    email: "2342342@qq.com",
    create_time: "2021-03-08T16:22:48Z",
    update_time: "2021-03-10T09:45:40Z",
    status: 1
    },
    {
    id: 5831,
    name: "aaa",
    email: "1231",
    create_time: "2021-03-03T13:01:11Z",
    update_time: "2021-03-09T10:13:49Z",
    status: 0
    }
];
  
const AccountListPage = () => {
    return(
        <div>
            <Protable columns={columns} dataSource={staticData} />
        </div>
    )
}
export default AccountListPage;
