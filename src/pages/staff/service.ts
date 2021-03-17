import { request } from 'umi';
export interface FormValues {
    [name: string]: any;
}
// 查询staff 列表数据，要带参数page、per_page
export const getRemoteStaffList = async ({ page, per_page } : { page: number, per_page: number }) => {
    return request(`/save/users?page=${page}&per_page=${per_page}`, {
        skipErrorHandler: false
    })
};

export const deleteStaffByStaffId = async ({ id }: { id: number }) => {
    return request(`/save/users/${id}`, {
        method: 'delete',
        skipErrorHandler: false
    })
    .then(function(response){
        console.log('in service work', response);        
        return true
    })
    .catch(function(error){
        console.log('in service fail', error);        
        return false
    })
};

export const createStaff = async (value: FormValues) => {
    return request(`/save/users/`, {
        method: 'POST',
        data: value,
        skipErrorHandler: false
    })
    .then(function(response){
        return true;
    })
    .catch(function(error){
        console.log('service error',error);
        return false;
    })
};

export const editStaff = async (value: FormValues) => {
    // export const editStaff = async ({id, value}: {id: number, value: FormValues }) => {
    const { id, ...restValue } = value;
    // console.log('in service', value, id, restValue);    
    return request(`/save/users/${id}`,{
        method: 'PUT',
        data: restValue,
        skipErrorHandler: false
    })
    .then(function(response){
        return true;
    })
    .catch(function(error){
        return false;
        console.log('service error', error);
        
    })
}

