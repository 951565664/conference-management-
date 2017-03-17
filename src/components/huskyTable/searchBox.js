import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './searchBox.less';
import { Input, Icon,Button,Tooltip } from 'antd';


function SearchBox({location,emitEmptyhandle,searchValue,inputPlaceholder,onSearchClick,onChangeSearchValue}) {

    /***
     * 清空search的键值
     */
    const emitEmpty = () => {
        document.getElementById('userNameInput').focus();
        emitEmptyhandle && emitEmptyhandle()
    }
            
    /**
     * @description input的onChange回调
     * @name onChange
     * @param
     * @returns
     */     
    const onChange = (e) => {
        var value  = e.target.value;
        console.log(value)
        onChangeSearchValue && onChangeSearchValue(value)
        !onChangeSearchValue && console.warn("缺少onChangeSearchValue");
    }
    
    var inputPlaceholder = inputPlaceholder?inputPlaceholder:"输入查询的名称"
    const suffix = searchValue ? <Icon type="close-circle" onClick={emitEmpty}/> : null;
    return (
        <div className={styles.searchBox}>
            <div className={styles['searchBox-input']}>
                <Input
                    placeholder={inputPlaceholder}
                    // prefix={<Icon type="user" />}
                    suffix={suffix}
                    value={searchValue}
                    onChange={onChange}
                    id="userNameInput"
                    />
            </div>
            <div className={styles['searchBox-btn']}><Button type="primary" icon="search" onClick={()=>onSearchClick(searchValue)}></Button></div>
        </div>
    );
}

SearchBox.propTypes = {
};

// export default connect( ({huskyTableM}) => ({huskyTableM}))(SearchBox);
export default SearchBox;
