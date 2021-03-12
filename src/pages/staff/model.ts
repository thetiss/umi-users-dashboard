import { Reducer, Effect } from "umi";

export interface ISingleStaffInfo {
    id: number;
    name: string;
    email: string;
    create_time: string;
    update_time: string;
    status: number;
};

interface IStaffModel {
    namespace: 'staff';
    state: {
        data: ISingleStaffInfo[];
        meta: {
            total: 0;
            currentPage: 1;
            pageSize: 5;
        };
    };
    reducers: {
        getStaffList: Reducer;
    };
    effects: {
        fetchRemoteStaffList: Effect;
        delStaffById: Effect;
    };
    //subscription: Subscription;
}
const StaffModel: IStaffModel = {
    namespace: 'staff',
    state: {
        data: [],
        meta: {
            total: 0,
            currentPage: 1,
            pageSize: 5
        }
    },
    reducers: {
        getStaffList() {
            return null;
        }
    },
    effects: {
        fetchRemoteStaffList(){
            return null;
        },
        delStaffById(){
            return null;
        }
    }

};
export default StaffModel;