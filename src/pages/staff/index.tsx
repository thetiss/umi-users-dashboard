import React, { FC, PureComponent } from 'react';
import { IStaffModelState, Dispatch, connect, Loading } from 'umi';
import { Button } from "antd";
import Protable from '@ant-design/pro-table';
import type { ProColumnType } from '@ant-design/pro-table';
import { ISingleStaffInfo } from './model';
interface PageProps {
  staff: IStaffModelState;
  loading: boolean;
  dispatch: Dispatch;
};
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
  
const AccountListPage: FC<PageProps> = ( { staff, loading, dispatch } ) => {
  const { data, meta } = staff; 
  return(
      <div>
          <Protable columns={columns} dataSource={data} />
      </div>
  )
};
export default connect(({ staff, loading }: { staff: IStaffModelState, loading: Loading }) => ({
  staff,
  loading: loading.models.staff
}))(AccountListPage);