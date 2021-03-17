import { Reducer, Effect, Subscription } from "umi";
import { message } from 'antd';
import { accountLoginWithParams } from './service';

export interface ILoginModelState {
    data: number;
};

interface ILoginModel {
    namespace: 'login';
    state: ILoginModelState;
    reducers: {
        changeLoginStatus: Reducer;
    };
    effects: {
        login: Effect;
        logout: Effect;
    };
};

const LoginModel: ILoginModel= {
    namespace: 'login',
    state: {
        data: 0
    },
    reducers: {
        changeLoginStatus( state, action ) {
            const { result } = action.payload;
            return {
                ...state,
                result
            }
        }
    },
    effects: {
        *login( action, { call, put } ) {
            const { loginAccountInfo } = action.payload;
            const result = yield call(accountLoginWithParams, loginAccountInfo);
            result ? message.info('Success Login') : message.error('Fail to Login');
            // const loginStatus = localStorage.getItem('userInfo') !== null;          
            // debugger;
            if(result){
                yield put({
                    type: 'changeLoginStatus',
                    payload: result
                });
            }
        },
        *logout() {

        }
    }
};
export default LoginModel;