import {queryUserObj,} from '../services/remoteData';
import {message} from 'antd';
import createHashHistory from 'history/createHashHistory'
const hashHistory = createHashHistory()
        
export default {

  namespace: 'mainM',
  state: {
    menuCurrent:'YH',
    userObj:{
        name:'ceshi1',
        noUser:'cs1',
        sex:0,
        attr:'cs超级管理员',
        deptName:'cs部门1',
    },
    loginLoading:false,
  },

  subscriptions: {
    setup({ dispatch, history }) {
        history.listen(location => {
            // if (location.pathname === '/') {
            //     dispatch({ type: 'updataBuffer', });
            // }
        });
    }
  },

  effects: {
    *requestUserObj({ payload }, { call, put }) {
        console.log('payload',payload);//noUser:values.noUser,psd:values.noUser,

        yield put({
            type: 'updateState',
            payload: {loginLoading:true}
        });
        
        //真是情况
        // const { data } = yield call( ()=>queryUserObj(payload) );
        if (data) {
            yield put({
                type: 'updateState',
                payload: {
                    userObj:data,
                    loginLoading:false,
                }
            });
            hashHistory.push('/')
        }else{
            message.error('登录失败，请重试!')
        }
            

        /****测试 */
        yield call(delay,1400);
        yield put({
            type: 'updateState',
            payload: {
                // userObj:data,
                loginLoading:false,
            }
        });
        hashHistory.push('/')

        
    },
  },

  reducers: {
    updateState(state, action) {
      return { ...state, ...action.payload };
    },
    menuCurrentUpDate(state, action) {
      return { ...state, ...action.payload };
    },
    
  },

};
function delay(timeout){
  var pro = new Promise(function(resolve,reject){
    setTimeout(resolve, timeout);
  });

  return pro;
}