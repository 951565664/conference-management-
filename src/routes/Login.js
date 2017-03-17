import React from 'react';
import { connect } from 'dva';
import WrappedlLogin from '../components/login/WrappedlLogin.js';
import styles from './Login.less';

function Login({ location, dispatch, Login}) {

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}><div className={styles.title}>苏州大学应用技术学院学生考勤管理系统</div></div>
        <div className={styles.main}>
          <div className={styles.container}>
              <p className={styles.title}>密码登录</p>
              <WrappedlLogin daat-dispatch={dispatch}></WrappedlLogin>
          </div>
        </div>
        <div className={styles.footer}>
              <p>
                <span>作者：耿鹏</span> 
                <span>QQ：951565664 </span>
              </p>
              <p><span>Github：https://github.com/951565664</span></p>
        </div>
    </div>
  );
}

Login.propTypes = {
};

function mapStateToProps({ login }) {
  return { login };
}
export default connect(mapStateToProps)(Login);
