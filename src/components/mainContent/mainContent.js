import React from 'react';
import { connect } from 'dva';
import styles from './mainContent.less';
import WZHuskyTable from '../huskyTable/WZhuskyTable/WZhuskyTable';
import SBHuskyTable from '../huskyTable/SBhuskyTable/SBhuskyTable';
import LXHuskyTable from '../huskyTable/LXhuskyTable/LXhuskyTable';
import BMHuskyTable from '../huskyTable/BMhuskyTable/BMhuskyTable';
import YHHuskyTable from '../huskyTable/YHhuskyTable/YHhuskyTable';
import KQHuskyTable from '../huskyTable/KQhuskyTable/KQhuskyTable';
import JLHuskyTable from '../huskyTable/JLhuskyTable/JLhuskyTable';
// import { Table, Input, Icon, Button, Popconfirm } from 'antd';


function MainContent({ location, dispatch, mainM}){

  const content = (mainM.menuCurrent=="WZ" && <WZHuskyTable ></WZHuskyTable>)
              ||  (mainM.menuCurrent=="SB" && <SBHuskyTable ></SBHuskyTable>)
              ||  (mainM.menuCurrent=="LX" && <LXHuskyTable ></LXHuskyTable>)
              ||  (mainM.menuCurrent=="BM" && <BMHuskyTable ></BMHuskyTable>)
              ||  (mainM.menuCurrent=="YH" && <YHHuskyTable ></YHHuskyTable>)
              ||  (mainM.menuCurrent=="KQ" && <KQHuskyTable ></KQHuskyTable>)
              ||  (mainM.menuCurrent=="JL" && <JLHuskyTable ></JLHuskyTable>)
  return (
      <div>
           <div className={styles["container"]}>{content}</div>
      </div>
  );
}



function mapStateToProps({ mainM }) {
  return { mainM };
}
export default connect(mapStateToProps)(MainContent);
