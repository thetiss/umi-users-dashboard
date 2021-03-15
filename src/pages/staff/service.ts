import { request } from 'umi';

export const getRemoteStaffList = async ({ page, per_page } : { page: number, per_page: number }) => {
    // debugger;
    return request(`/save/users?page=${page}&per_page=${per_page}`, {
        skipErrorHandler: false
    })
    // debugger;
};

