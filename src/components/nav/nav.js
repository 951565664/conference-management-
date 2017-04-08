import React from 'react';
import { connect } from 'dva';
import styles from './nav.less';


import { Menu, Icon } from 'antd';
import { Row, Col } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function Nav({ location, dispatch, mainM}){
  //   state = {
  //   current: 'mail',
  // }
  const menuClick = (e) => {
    dispatch({
      type: 'mainM/menuCurrentUpDate',
      payload: {menuCurrent:e.key}
    });
  };
  return (
    <div className={styles["navWrapper"]}>
      <div className={styles["container"]}>
        <Row>
          <Col span={5}>
          <div className={styles["title"]}>
              <div className={styles["img"]}><img src='./logo.png' alt=""/></div>
              <div className={styles["text"]}>苏州大学应用技术学院学生考勤管理系统</div>
          </div> 
          </Col>
          <Col span={19}>
            <Menu
              onClick={menuClick}
              selectedKeys={[mainM.menuCurrent]}
              mode="horizontal"
              style={{ height: "50px", lineHeight: "50px", fontSize: "16px", }}
              >
              <Menu.Item key="YH">
                用户管理
              </Menu.Item>
              <Menu.Item key="WZ">
                位置管理
              </Menu.Item>
              <Menu.Item key="SB">
                设备管理
              </Menu.Item>
              <Menu.Item key="LX">
                类型管理
              </Menu.Item>
              <Menu.Item key="BM">
                部门管理
              </Menu.Item>
              
              <Menu.Item key="KQ">
                考勤查询
              </Menu.Item>
              <Menu.Item key="JL">
                记录查询
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </div>
    </div>
  );
}


export default connect(({mainM})=>({mainM}))(Nav);







