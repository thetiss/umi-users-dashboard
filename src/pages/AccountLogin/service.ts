import { request } from 'umi';

export interface FormValues {
    [name: string]: any;
};

export const accountLogin = async ( loginInputInfo: FormValues ) => {
    const { isAdmin, ...restInfo } = loginInputInfo;
    let validInfo = {
        username: restInfo.username || '',
        password: restInfo.password || ''
    };
    // debugger;
    return request(`/use/manage/user/login.do`,{
        method: 'POST',
        data: validInfo,
        skipErrorHandler: false
    })
    .then(function (info) {
        console.log('service work',info);        
        return true;
    })
    .catch(function (error) {
        console.log('service error',error);        
        return false;
    })
};

export const accountLoginWithParams = async ( loginInputInfo: FormValues ) => {
    const { isAdmin, ...restInfo } = loginInputInfo;
    let username = restInfo.username;
    let password = restInfo.password;
    return request(`/use/manage/user/login.do?username=${username}&password=${password}`,{
        method: 'POST',        
        skipErrorHandler: false
    })
    .then(function (info) {
        console.log('service work',info);        
        return true;
    })
    .catch(function (error) {
        console.log('service error',error);        
        return false;
    })
};