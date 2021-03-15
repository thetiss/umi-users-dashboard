import { Reducer, Effect, Subscription } from "umi";
import { getRemoteStaffList } from './service';
export interface ISingleStaffInfo {
    id: number;
    name: string;
    email: string;
    create_time: string;
    update_time: string;
    status: number;
};

export interface IStaffModelState {
    data: ISingleStaffInfo[];
    meta: {
        total: number;
        page: number;
        per_page: number;    
    }
};
interface IStaffModel {
    namespace: 'staff';
    state: IStaffModelState;
    reducers: {
        getStaffList: Reducer;
    };
    effects: {
        fetchRemoteStaffList: Effect;
        delStaffById: Effect;
    };
    subscriptions: {
        setup: Subscription;
    };
};
const StaffModel: IStaffModel = {
    namespace: 'staff',
    state: {
        data: [],
        meta: {
            total: 0,
            page: 1,
            per_page: 5
        }
    },
    reducers: {
        getStaffList(state, action) {
            const { data, meta } = action.payload;
            return {
                ...state,
                data,
                meta
            };
        }
    },
    effects: {
        // 根据payload，去call service时带参数, 再put reducer。修改store中state
        *fetchRemoteStaffList( action, { call, put }){
            const { page, per_page } = action.payload;
            const result = yield call( getRemoteStaffList, {page, per_page} );
            // debugger;
            if (result) {
                yield put({
                    type: 'getStaffList',
                    payload: result
                })
            }
        },
        *delStaffById(){
            return null;
        }
    },
    // 监听到访问路径是staff时，触发fetchRemoteStaffList
    subscriptions: { 
        setup({ dispatch, history }){
            history.listen(( { pathname } ) => {
                if(pathname === '/staff') {
                    dispatch({
                        type: 'fetchRemoteStaffList',
                        payload: {
                            page: 1,
                            per_page: 10
                        }
                    })
                }
            })
        }
    }

};
export default StaffModel;