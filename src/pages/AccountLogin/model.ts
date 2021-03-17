import { Reducer, Effect, Subscription, history } from "umi";
import { message } from 'antd';
import { accountLoginWithParams, getPageQuery } from './service';

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
            const isLogin = localStorage.getItem('userInfo') !== null;
            let accessUrl = localStorage.getItem('redirectUrl') ;
            if(!accessUrl){
                accessUrl = '/';
            }
            history.replace(accessUrl);
            // debugger;
            return {
                ...state,
                result
            }
        }
    },
    effects: {
        *login( action, { call, put } ) {
            const { loginAccountInfo } = action.payload;
            const urlParams = new URL(window.location.href);
            const params = JSON.stringify(getPageQuery());     
            // history.goBack();
            // debugger;
            const result = yield call(accountLoginWithParams, loginAccountInfo);
            result ? message.info('Success Login') : message.error('Fail to Login');

            if(result){
                yield put({
                    type: 'changeLoginStatus',
                    payload: {result}
                });
            }
        },
        *logout() {

        }
    }
};
export default LoginModel;