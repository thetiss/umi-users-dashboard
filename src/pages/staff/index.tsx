import React, { PureComponent } from 'react';
import { IStaffModelState, Dispatch, connect } from 'umi';
import { Button } from "antd";
import Protable from '@ant-design/pro-table';
import type { ProColumnType } from '@ant-design/pro-table';
import { ISingleStaffInfo } from './model';

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
  
const AccountListPage = ( staff: any ) => {
  console.log('what is staff', staff,staff.staff.staff);
  const { data, meta } = staff.staff.staff; 
  // debugger;
  return(
      <div>
          <Protable columns={columns} dataSource={data} />
          Protable is coming……
      </div>
  )
};
const mapStateToProps = ( staff: IStaffModelState ) => {
  return {
    staff
  }
};
export default connect(mapStateToProps)(AccountListPage);