import React from 'react';
import { Redirect, History } from 'umi';

export default (props) => {
    const isLogin = localStorage.getItem('userInfo') !== null;
    console.log('in auth', isLogin);
    if(isLogin){
        return <div> { props.children } </div>
    }
    const pathname = window.location.pathname;
    localStorage.setItem('redirectUrl', pathname);
    return <Redirect to="/login" />
}