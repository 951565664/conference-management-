import React from 'react';
import { connect } from 'dva';
import styles from './top.less';

import {Popconfirm ,message} from 'antd';


function Top({ location, dispatch, topM}){

  const text = '您确定退出当前用户吗?';

function confirm() {
  message.info('已经退出当前账户.');
}
  return (
      <div className={styles["top"]}>
        <div className={styles["container"]+' '+styles["clear"]}>
            <div className={styles["leftBox"]}>{topM.userName}~欢迎访问苏州大学考勤管理系统</div>
            <div className={styles["rightBox"]}>当前用户：<a href="">{topM.userName}</a><span className={styles["ant-divider"]} />工号：{topM.workId}<span className={styles["ant-divider"]} />身份权限：{topM.identity}<span className={styles["ant-divider"]} />
            <Popconfirm placement="bottomRight" title={text} onConfirm={confirm} okText="退出" cancelText="返回">
      <a href="">退出</a>
    </Popconfirm></div>  
      </div></div>
  );
}



function mapStateToProps({ topM }) {
  return { topM };
}
export default connect(mapStateToProps)(Top);
