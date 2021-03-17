import React, { FC, useState } from 'react';
import { Dispatch, connect, Loading } from 'umi';
import { message, Form, Button, Input } from 'antd';
import ProForm, { ProFormText, ProFormSwitch } from '@ant-design/pro-form';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { accountLoginWithParams, FormValues } from "./service";
import PageTitle from "./components/PageTitle";


// const loginHandler = async ( loginInfo: FormValues ) => {
//     const response = await accountLoginWithParams(loginInfo);
//     response ? message.info('Success Login') : message.error('Fail to Login')
// };
interface PageProps {
    dispatch: Dispatch;

};

const AccountLogin: FC<PageProps> = ( { dispatch }) => {
    const loginHandler = async ( loginAccountInfo: FormValues ) => {
        dispatch({
            type: 'login/login',
            payload: { loginAccountInfo }
        });
        // debugger;
    };
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
// export default connect( ({ dispatch, loading }:{ dispatch: Dispatch, loading: Loading }) => ({ 
//     dispatch, 
//     loading: loading.models.login 
// }))(AccountLogin);

export default connect( ({ dispatch }:{ dispatch: Dispatch }) => ({ 
    dispatch
}))(AccountLogin);