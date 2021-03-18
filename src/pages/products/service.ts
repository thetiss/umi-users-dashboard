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

export const getRemoteProductsList = async ( currentPage: number | undefined ) => {
    return request(`use/manage/product/list.do?pageNum=${currentPage}`, {
        method: 'get',
        skipErrorHandler: false
    })
    .then(function(info){        
        return info.data;
    })
    .catch(function(error){
        return false
    })
};
