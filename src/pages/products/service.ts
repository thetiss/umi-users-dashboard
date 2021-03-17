import { request } from 'umi';

export interface IProductInfo {
    id: number;
    categoryId: number;
    name: string;
    subtitle: string;
    mainImage: string;
    price: number;
    status: number;
    imageHost: string;
};
// http://adminv2.happymmall.com/manage/product/list.do?pageNum=1
// export const getRemoteProductsList = async ( pageNum: number) => {
export const getRemoteProductsList = async ( ) => {
    let pageNum = 1;
    return request(`use/manage/product/list.do?pageNum=${pageNum}`, {
        method: 'get',
        skipErrorHandler: false
    })
    .then(function(info){
        
        return info.data.list;
    })
    .catch(function(error){
        return false
    })
};

export const getRemoteProductsListTS = async ( ) => {
    let pageNum = 1;
    return request(`use/manage/product/list.do?pageNum=${pageNum}`, {
        method: 'get',
        skipErrorHandler: false
    })
    .then(function(info){
        // debugger;
        //return info.data.list;
        return {
            success: true,
            data: info.data.list
        }
    })
    .catch(function(error){
        return false
    })
};