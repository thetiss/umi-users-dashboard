import React from 'react';
import { Redirect } from 'umi';

export default (props) => {
    const isLogin = localStorage.getItem('userinfo') !== null;
    // debugger;
    console.log('in auth', isLogin);
    if(isLogin){
        return <div>{ props.children }</div>
    }
    return <Redirect to="/login" />
}