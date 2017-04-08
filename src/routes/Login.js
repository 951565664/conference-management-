import React from 'react';
import { connect } from 'dva';
import WrappedlLogin from '../components/login/WrappedlLogin.js';
import styles from './Login.less';
import {Spin} from 'antd';



function Login({ location, dispatch, mainM}) {
const container = (<div className={styles.wrapper}>
  <div className={styles.header}><div className={styles.title}><div className={styles.img}><img src='./logo.png' alt=""/></div>苏州大学应用技术学院学生考勤管理系统</div></div>
    <div className={styles.main}>
      <div className={styles.loginBox}>
          <p className={styles.title}>用户登录</p>
          <WrappedlLogin dispatch={dispatch}></WrappedlLogin>
      </div>
    </div>
    <div className={styles.footer}>
          <p>
            <span>作者：耿鹏</span> 
            <span>QQ：951565664 </span>
          </p>
          <p><span>Github：https://github.com/951565664</span></p>
    </div>
</div>);
  return (
    
      <Spin spinning={mainM.loginLoading} wrapperClassName={styles.spin}>
        {container}
      </Spin>
  );
}


function mapStateToProps({ mainM }) {
  return { mainM };
}

export default connect(mapStateToProps)(Login);
