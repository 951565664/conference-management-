import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';

import Top from '../components/top/top.js';
import Nav from '../components/nav/nav.js';
import MainContent from '../components/mainContent/mainContent.js';
import BackTopBtn from '../components/backTopBtn/backTopBtn.js';



function IndexPage() {
  return (
    <div>
      <Top></Top>
      <Nav></Nav>
      <MainContent></MainContent> 
      <BackTopBtn></BackTopBtn>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
