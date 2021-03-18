import React, { FC, useState, PureComponent } from 'react';
import { IStaffModelState, Dispatch, connect, Loading } from 'umi';
import { Popconfirm, Button } from "antd";
import Protable from '@ant-design/pro-table';
import type { ProColumnType } from '@ant-design/pro-table';
import { ISingleStaffInfo } from './model';
import { FormValues } from "./service";
import StaffInfoModal from './components/StaffInfoModal';
interface PageProps {
  staff: IStaffModelState;
  loading: boolean;
  dispatch: Dispatch;
};
  
const AccountListPage: FC<PageProps> = ( { staff, loading, dispatch } ) => {
  const { data, meta } = staff; 
  const [ staffInfoModalVisible, setStaffInfoModalVisible ] = useState(false);
  const [ staffInfo, setStaffInfo ] = useState<ISingleStaffInfo  | undefined >(undefined);

  const deleteStaffById = ( id: number ) => {
    dispatch({
      type: 'staff/delStaffById',
      payload: { id }
    });
  };

  const editStaffHandler = ( currentStaffInfo: ISingleStaffInfo ) => {
    setStaffInfo(currentStaffInfo);
    setStaffInfoModalVisible(true);
  };

  const modalCancelHandler = () => {
    setStaffInfo(undefined);
    setStaffInfoModalVisible(false);
  };
  const editStaffWithNewInfo = ( currentStaffInfo: FormValues ) => {
    dispatch({
      type: 'staff/editStaff',
      payload: { currentStaffInfo }
    })
  };

  const createStaffWithNewInfo = ( currentStaffInfo: FormValues ) => {
    currentStaffInfo.status = 1;
    currentStaffInfo.create_time='2021-03-14T12:18:27Z';
    console.log('in onFinish', currentStaffInfo);
    dispatch({
      type: 'staff/createStaff',
      payload: { currentStaffInfo }
    })
  };

  const onFinish = (currentStaffInfo: FormValues) => {
    const { id, ...staffInfo } = currentStaffInfo;
    if(id){
      editStaffWithNewInfo(currentStaffInfo);
    } else {
      createStaffWithNewInfo(currentStaffInfo);
    }
  };
  
  const createStaffHandler = () => {
    setStaffInfoModalVisible(true);
  };

  const columns: ProColumnType<ISingleStaffInfo>[] = [
    {
      title: '序号',
      dataIndex: 'id',
      valueType: 'indexBorder',
      width: 72
    },
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
      title: '操作',
      key: 'action',
      sorter: true,
      valueType: 'option',
      render: (text, record) => [
        <Popconfirm 
          title='确定删除该元素吗？' 
          onConfirm={() => deleteStaffById(record.id)} 
            okText='确定' 
            cancelText='取消'>
              <a key="delete">删除</a>
        </Popconfirm>,
        <a key="edit" onClick={() => editStaffHandler(record)} className="ant-dropdown-link">
          编辑
        </a>
      ],
    },
  ];
  return(
      <div>          
          <Protable 
            columns={columns} 
            dataSource={data} 
            loading={loading} 
            toolbar={{
              actions: [
                <Button type='primary' onClick={() => createStaffHandler()}>创建新员工</Button>
              ]
            }}/>
          <StaffInfoModal 
            visible={staffInfoModalVisible} 
            record={staffInfo} 
            onCancel={modalCancelHandler} 
            onFinish={onFinish}
          />
      </div>
  )
};
export default connect(({ staff, loading }: { staff: IStaffModelState, loading: Loading }) => ({
  staff,
  loading: loading.models.staff
}))(AccountListPage);