import React from 'react';
import { message, Popconfirm } from 'antd';
import Protable, { ProColumnType } from '@ant-design/pro-table';
import { IProductInfo, getRemoteProductsList } from './service';

const columns: ProColumnType<IProductInfo> [] = [
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
          onConfirm={() => deleteProductHandler(record.id)} 
            okText='确定' 
            cancelText='取消'>
              <a key="delete">删除</a>
        </Popconfirm>,
        <a key="edit" onClick={() => editProductHandler(record)} className="ant-dropdown-link">
          编辑
        </a>
      ],
    },
];

const deleteProductHandler = ( productId: number ) => {

};
const editProductHandler = ( record: IProductInfo ) => {

};

const getProductsListHandler = async ( currentPage: number | undefined ) => {
    const response = await getRemoteProductsList(currentPage);
    return {
      data: response.list,
      total: response.total,
      success: true
    }
};
let pageNum = 10;
 
const ProductsList = () => {
    return(
        <div>
            <Protable
                columns={columns} 
                request = {(params) => getProductsListHandler(params.current)}
            />
        </div>
    )
};
export default ProductsList;