import { request } from 'umi';
import { parse } from 'querystring';

export interface FormValues {
    [name: string]: any;
};
export const getPageQuery = () => parse(window.location.href.split('?')[1]);
let testUrl = window.location.href;
let rightUrl = window.location.href.split('?')[1];
// debugger;

export const accountLoginWithParams = async ( loginInputInfo: FormValues ) => {
    const { isAdmin, ...restInfo } = loginInputInfo;
    let username = restInfo.username;
    let password = restInfo.password;
    // debugger;
    return request(`/use/manage/user/login.do?username=${username}&password=${password}`,{
        method: 'POST',        
        skipErrorHandler: false
    })
    .then(function (info) {
        // 若登录成功，添加userInfo item给localStorage，在model或auth.ts中判断是否有该item
        localStorage.setItem('userInfo', JSON.stringify(info));
        return true;
    })
    .catch(function (error) {
        return false;
    })
};