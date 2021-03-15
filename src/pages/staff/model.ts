import { Reducer, Effect, Subscription } from "umi";
import { getRemoteStaffList, deleteStaffByStaffId, createStaff, editStaff } from './service';
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
        createStaff: Effect;
        editStaff: Effect;
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
        // 根据页面/其他effect/subscription，传递的payload，去call service时带参数, 再put reducer。修改store中state
        *fetchRemoteStaffList( action, { call, put } ) {
            const { page, per_page } = action.payload;
            const result = yield call( getRemoteStaffList, { page, per_page } );
            // debugger;
            if (result) {
                yield put({
                    type: 'getStaffList',
                    payload: result
                })
            }
        },
        *delStaffById( action, { call, select, put } ) {
            const { id } = action.payload;
            const result = yield call( deleteStaffByStaffId, { id } );
            if(result) {
                const { page, per_page } = yield select(
                    (state: any) => state.staff.meta
                );
                yield put({
                    type: 'fetchRemoteStaffList',
                    payload: {
                        page,
                        per_page
                    }
                })
            }
        },
        *createStaff( action, { call, put, select }) {
            const { currentStaffInfo } = action.payload;
            const result = yield call( createStaff, currentStaffInfo);
            const { page, per_page } = yield select(
                (state: any) => state.staff.meta
            );
            if(result){
                yield put({
                    type: 'fetchRemoteStaffList',
                    payload: {
                        page,
                        per_page
                    }
                })
            }
        },
        *editStaff( action, { call, put, select }) {            
            const { currentStaffInfo } = action.payload;
            // const { id, ...staffInfo } = currentStaffInfo;
            // console.log('in model', id, staffInfo);            
            // debugger;
            const result = yield call( editStaff,  currentStaffInfo);
            const { page, per_page } = yield select(
                (state: any) => state.staff.meta
            );
            if(result){
                yield put({
                    type: 'fetchRemoteStaffList',
                    payload: {
                        page,
                        per_page
                    }
                })
            }
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