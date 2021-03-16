import React, { FC, useState } from 'react';
import { message } from 'antd';
import ProForm, { ProFormText, ProFormSwitch } from '@ant-design/pro-form';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { accountLoginWithParams, accountLogin, FormValues } from "./service";
import PageTitle from "./components/PageTitle";

const loginHandler = async ( loginInfo: FormValues ) => {
    const response = await accountLoginWithParams(loginInfo);
    response ? message.error('Fail to Login'): message.info('Success Login')
};

const AccountLogin = () => {
    return(
        <div
            style={{
                width: 330,
                margin: 'auto',
            }}
        >
            <ProForm 
                onFinish={(values) => loginHandler(values)}

            >
                <PageTitle />
                <ProFormText
                    fieldProps={{
                        size: 'large',
                        prefix: <UserOutlined />
                    }}
                    name="username"
                    placeholder="请输入用户名"
                    rules={[
                        {
                            required: true,
                            message: '请输入用户名!',
                        }
                    ]}
                />
                <ProFormText
                    fieldProps={{
                        size: 'large',
                        prefix: <EyeInvisibleOutlined />
                    }}
                    name="password"
                    placeholder="请输入密码"
                    rules={[
                        {
                            required: true,
                            message: '请输入密码!',
                        }
                    ]}
                />
                <ProFormSwitch  
                    name='isAdmin'     
                    label='是否管理员'
                    checkedChildren={<CheckOutlined />}       
                    unCheckedChildren={<CloseOutlined />}       
                    initialValue={true} 
                />                
            </ProForm>
        </div>
    )
};
export default AccountLogin;

