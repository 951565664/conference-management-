import React from 'react';
import { connect } from 'dva';
import styles from './top.less';

import {Popconfirm ,message} from 'antd';
import createHashHistory from 'history/createHashHistory'
const hashHistory = createHashHistory()


function Top({ location, dispatch, mainM}){

  const text = '您确定退出当前用户吗?';
  function confirm() {
    message.success('已经退出当前账户.');
    hashHistory.push('/Login')
  }
  return (
      <div className={styles["top"]}>
        <div className={styles["container"]+' '+styles["clear"]}>
            <div className={styles["leftBox"]}>{mainM.userObj.name}{mainM.userObj.sex?'先生':'女士'}~欢迎访问苏州大学考勤管理系统</div>
            <div className={styles["rightBox"]}>当前用户：
                <a href="">{mainM.userObj.name}</a>
                <span className={styles["ant-divider"]} />工号：{mainM.userObj.noUser}
                <span className={styles["ant-divider"]} />权限：{mainM.userObj.attr}
                <span className={styles["ant-divider"]} />部门：{mainM.userObj.deptName}
                <span className={styles["ant-divider"]} />
                <Popconfirm placement="bottomRight" title={text} onConfirm={confirm} okText="退出" cancelText="返回">
                  <a href="">退出</a>
                </Popconfirm>
            </div>  
      </div></div>
  );
}

export default connect(({mainM})=>({mainM}))(Top);
