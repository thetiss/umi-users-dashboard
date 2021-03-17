import React from 'react';
import { request } from 'umi';
import { message, Popconfirm } from 'antd';
import Protable, { ProColumnType } from '@ant-design/pro-table';
import { IProductInfo, getRemoteProductsList, getRemoteProductsListTS } from './service';
const staticData = [
    {
    "id": 26,
    "categoryId": 100006,
    "name": "1teer32",
    "subtitle": "修改了1111",
    "mainImage": "0b0955bf-c7c7-4051-94d4-df2c3e222121.png",
    "price": 1034,
    "status": null,
    "imageHost": "http://img.happymmall.com/"
    },
    {
    "id": 27,
    "categoryId": 100007,
    "name": "3333",
    "subtitle": "sdfhfdtg111",
    "mainImage": "29e22567-e3bc-49a2-86dd-1bed644ef790.jpg",
    "price": 10,
    "status": null,
    "imageHost": "http://img.happymmall.com/"
    },
    {
    "id": 28,
    "categoryId": 28,
    "name": "东方饭店东方饭店",
    "subtitle": "呃呃呃1111111",
    "mainImage": "b38ffc81-bca8-46c8-a264-70d6011574e6.jpg",
    "price": 111,
    "status": 1,
    "imageHost": "http://img.happymmall.com/"
    },
    {
    "id": 29,
    "categoryId": 100005,
    "name": "苹果88已经上市",
    "subtitle": "",
    "mainImage": "3511e23a-6c9b-46e7-af44-870a42055fb6.jpg",
    "price": 113,
    "status": 2,
    "imageHost": "http://img.happymmall.com/"
    },
    {
    "id": 30,
    "categoryId": 100001,
    "name": "r5647",
    "subtitle": "Disney Friends",
    "mainImage": "be0e1bc7-3884-4bf6-9b5a-143e5091c19c.png",
    "price": 159,
    "status": 2,
    "imageHost": "http://img.happymmall.com/"
    },
    {
    "id": 31,
    "categoryId": 31,
    "name": "32233",
    "subtitle": "阿萨德傻叉11111",
    "mainImage": "",
    "price": 50,
    "status": 1,
    "imageHost": "http://img.happymmall.com/"
    },
    {
    "id": 32,
    "categoryId": 100015,
    "name": "test",
    "subtitle": "asdfadf",
    "mainImage": "ec764422-df78-44d3-a7e8-1b0830f45749.png",
    "price": 189,
    "status": 1,
    "imageHost": "http://img.happymmall.com/"
    },
    {
    "id": 33,
    "categoryId": 100004,
    "name": "十分大",
    "subtitle": "null",
    "mainImage": "5471c0fd-8195-4514-8edf-acf3cbaa1c76.jpeg",
    "price": 1,
    "status": 1,
    "imageHost": "http://img.happymmall.com/"
    },
    {
    "id": 34,
    "categoryId": 100208,
    "name": "asdasd",
    "subtitle": "200",
    "mainImage": "a420b975-714c-494c-9813-8a321153dbaf.png",
    "price": 66,
    "status": 2,
    "imageHost": "http://img.happymmall.com/"
    },
    {
    "id": 35,
    "categoryId": 100002,
    "name": "王慧敏",
    "subtitle": "jop[23123",
    "mainImage": null,
    "price": 10002,
    "status": 1,
    "imageHost": "http://img.happymmall.com/"
    }
    ];
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

const getProductsListHandler = async () => {
    const response = await getRemoteProductsList();
};
let pageNum = 10;
 
const ProductsList = () => {
    return(
        <div>
            <Protable<IProductInfo>
                columns={columns} 
                // dataSource={staticData}
                request = {() => getRemoteProductsListTS()}
                // request={() => request(`use/manage/product/list.do?pageNum=${pageNum}`, {
                //     method: 'get',
                //     skipErrorHandler: false
                // })}
                // request={async() => 
                // {
                //     console.log('params');
                //     return {
                //         data: 12
                //     }
                // }}
            />
        </div>
    )
};
export default ProductsList;