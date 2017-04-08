/**
 * 已完成功能：editdelete,editCancle，add。search
 * 未完成：
 * editCancle.可调不同的check事件
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './huskyTable.less';
import SearchBox from './searchBox';
import EditableCell from './editableCell';
import { Table, Input, Icon, Button, Popconfirm } from 'antd';
const Search = Input.Search;

function HuskyTable({isNormal,columns, isEditLock,dataSource,isNewItem,dataSourceBufferProp,paginationCurrent,
    paginationPageSize,dataSourceLength,searchValue,isCanOrder,isCanOrderChangeProps,inputPlaceholder,
    editProps, checkConfimProps, checkCancleProps,onCellChangeProps,handleDeleteProps,handleAddProps,tableLoading,
    searchClickProps, onChangeTableProps, emitEmptyhandleProps,onChangeSearchValueProps,searchOptionIndex }) {

    /*
    *columns的假数据,增加了底部事件栏的渲染
    */
    
    var newColumns = columns.map(
        (item, key) => {
            var render;
            if (item.dataIndex == 'operation') {
                render = (text, record, index) => {
                    return (
                        dataSource.length > 0 ?
                            (
                                <div>
                                    <Popconfirm title="Sure to delete?" onConfirm={() =>onDelete(record.key)}>
                                        <Button type="danger" icon="minus" ></Button>
                                    </Popconfirm>
                                    {record.editable ? <span><Icon
                                        type="check"
                                        className="editable-cell-icon-check"
                                        onClick={() => checkConfim(record.key)}
                                        /><Icon
                                        type="close"
                                        className="editable-cell-icon-checkCancle"
                                        onClick={() => checkCancle(record.key)}
                                        />
                                        </span>
                                        : <Button type="primary" icon="edit" onClick={() =>edit(record)} className="editable-cell-icon" ghost></Button>
                                    }
                                </div>
                            ) : null
                    );
                };
            }
            else {
                render = (text, record, index) => {

                    return (
                        <EditableCell
                            value={text}
                            onChange={onCellChange(index, item.dataIndex)}
                            editable={record.editable} />
                    );
                }
            }

            return { ...item, render: render,};
        }
    )


    /*** 编辑时触发函数
     * 参数： record 是要变更的整个item
     * 功能：将model的dataSource的editable更新，整个dataSource更新。
     */
    const edit = (record) => {
        let editKey = record.key
        // 如果是新的组件
        if (isNormal == true) {
            if (editProps) {
                editProps(record);
            }
            else {
                console.error("没有 editProps 这个参数");
            }
            return;
        }

        /**
         * 将可编辑isEditLock锁住
         * */ 
        
        if(!isEditLock){
            //将具体的item条目的editable的值修改一下。
            let newDataSource = dataSource.map((item, key) => {
                if (editKey == item.key) {
                    return { ...item, editable: true}
                }
                else {
                    return { ...item };
                }
            });


            if(editProps){
                editProps(newDataSource);
            }
            else{
                console.error("没有 editProps 这个参数");
            }
        }
    };


    /***编辑成功的确认事件
     * 参数是点击确认按钮的key
     * 功能：将model的dataSource，dataSourceBuffer的整个值更新为dataSourceBuffer缓存,将isEditLock改为false，释放
     */
    const checkConfim = (checkKey) => {
        console.log('checkKey',checkKey)
        for (let [index, elem] of dataSourceBufferProp.entries()) {
            
            if(elem.key == checkKey)
            {
                 var bufferItem = elem;
                //  break;
            }
        }
        var arr = Object.keys(bufferItem)
        console.log("arr",arr);
        var isNull = false;
        
        for(let [index,elem] of arr.entries() )
        {
            if(bufferItem[elem]=='')
            {
                isNull = true;
            }

        }
        
        if(!isNull)
        {
            let newDataSource = dataSourceBufferProp.map((item, key) => {
                if (checkKey == item.key) {
                    return { ...item, editable: false }
                }else {
                    return { ...item };
                }
            });

            /**回调 */
            if(checkConfimProps){
                checkConfimProps(newDataSource);
            }else{
                console.error("没有 checkConfimProps 这个参数");
            }
        }
        else{
            alert('请填入数据2')
        }
    };


    /***
     * 编辑取消事件 
     * 参数是点击取消按钮的key
     * 功能：将model的dataSource，dataSourceBuffer的整个值更新为回退为实际的值,将isEditLock改为false，释放
     */
    const checkCancle = (checkKey) => {
        debugger;
        if(!isNewItem){
            let newDataSource = dataSource.map((item, key) => {
                    if (checkKey == item.key) {
                        return { ...item, editable: false }
                    }
                    else {
                        return { ...item };
                    }
                }
            );
            /**回调 */
            if(checkCancleProps){
                checkCancleProps(true,newDataSource);
            }else{
                console.error("没有 checkCancleProps 这个参数");
            }
        }
        else{
            /**回调 */
            if(checkCancleProps){
                checkCancleProps(false);
            }
            else{
                console.error("没有 checkCancleProps 这个参数");
            }

            onDelete(checkKey);
        }
    };


    /***
     * 当input改变时
     */
    const onCellChange = (index, key) => {
        if (!index && !key) {
            let dataSourceBuffer = [...dataSource];

            /**回调 */
            if(onCellChangeProps){
                onCellChangeProps(dataSourceBuffer);
            }
            else{
                console.error("没有onCellChangeProps这个参数");
            }
        }
        else {
            return (value) => {
                var dataSourceBuffer = dataSourceBufferProp.map(
                    (item,key) => {
                        return {...item};
                    }
                )

                var indexInGolabel = index+((paginationCurrent-1)*paginationPageSize);


                dataSourceBuffer[indexInGolabel][key] = value;
                /**回调 */
                if(onCellChangeProps){
                    onCellChangeProps(dataSourceBuffer);
                }else{
                    console.error("没有onCellChangeProps这个参数");             
                }
            };
        }
    }

    /**
     * @name onDelete
     * @param checkKey 操作的key（id）
     * @description 删除表格中的条目
     */
    const onDelete = (checkKey) => {

        // 如果是新的组件
        if(isNormal == true){
           if(handleDeleteProps){
                handleDeleteProps(checkKey);
            }else{
                console.error("没有 handleDeleteProps 这个参数");
            }
            return ;
        }

        var dataSourceBuffer = dataSourceBufferProp.map(
            (item, key) => {
                return { ...item };
            }
        )
        for (let [index, elem] of dataSourceBuffer.entries()) {
            if (elem.key == checkKey) {
                dataSourceBuffer.splice(index, 1);
                //  break;
            }
        }

         /**回调 */
        if(handleDeleteProps){
            handleDeleteProps(dataSourceBuffer);
        }else{
            console.error("没有 handleDeleteProps 这个参数");
        }
    }

    
    /***
     * 增加表格事件
     */
    const handleAdd = () => {
        // 如果是带弹窗的组件
        if(isNormal == true){
            if(handleAddProps){
                handleAddProps(newDataSource);
            }else{
                console.error("没有 handleAddProps 这个参数");
            }
            return ;
        }

        //判断当前是否锁住了，如果锁住提示请先保存
        if (!isEditLock) {
            var newDataItem ;
            if(dataSource.length > 0)
            {
                newDataItem = dataSource[0];
                var arrkey = Object.keys(newDataItem)

                arrkey.map(
                    (item,key) => {
                        newDataItem[item] ='';
                        item=='key' && (newDataItem[item] = dataSourceLength.toString());
                        item=='editable' && (newDataItem[item] = true);
                    }
                )
            }
            var newDataSource = dataSource.map(
                (item, key) => {
                    return { ...item };
                }
            )

            newDataSource = [...dataSource, newDataItem];

            /***
             * dataSourceBuffer(当前修改后的值（非实际值）更新
             * dataSource(当前tabal的dataSource）更新
             * dataSourceLength(当前tabal的dataSource长度）更新
             * isEditLock(是否在增加和修改，）更新true，锁住
             * isNewItem(是否是新增的值，如果是修改不能为空）更新为true
             * paginationCurrent(当前table的分页值）更新为最后一页
             */


             /**回调 */
            if(handleAddProps){
                handleAddProps(newDataSource);
            }
            else{
                console.error("没有 handleAddProps 这个参数");
            }
        }
        else {
            alert("请先保存");
        }
    }

    /***
     * 搜索表格事件，传入搜索的字段
     */
    const onSearchClick = (searchNum) => {
        if (!isEditLock) {
            if (!searchNum && searchNum != ' ') {

            }

            /***
             * 新建一空的buffer数组
             */
            var newDataSource=[];
            
            //循环真实的数据
            for (let [index, elem] of dataSource.entries()) {

                //将匹配的searchNum进行匹配
                var reg = new RegExp(searchNum);
                // 如果匹配。将匹配的放到新的数组
                if (reg.test(elem[searchOptionIndex])) {
                    newDataSource.push(dataSource[index]);
                }
            }
             /**回调 */
            if(searchClickProps){
                searchClickProps(newDataSource);
            }
            else{
                console.error("没有 searchClickProps 这个参数");
            }
            /**回调 */
        }
    }
    

    const onChangeTable=(pagination, filters, sorter)=>{
         /**回调 */
            if(onChangeTableProps){
                onChangeTableProps(pagination.current);
            }
            else{
                console.error("没有 onChangeTableProps 这个参数");
            }
        /**回调 */
    }
    const emitEmptyhandle = () => {

        /**回调 */
            if(emitEmptyhandleProps){
                emitEmptyhandleProps();
            }
            else{
                console.error("没有 emitEmptyhandleProps 这个参数");
            }
        /**回调 */
        
    }
    const formatValue = (value) => {
       var reg=/^[0-9]*$/;
       return reg.test(value);
    }
    const onChangeSearchValue=(value)=>{
        
        /**回调 */
            if(onChangeSearchValueProps){
               formatValue(value) &&  onChangeSearchValueProps(value);
            }
            else{
                console.error("没有 onChangeSearchValueProps 这个参数");
            }
        /**回调 */
    }
    
    return (
        <div className={styles["huskyTable"]}>
            <div className={styles["top"]}>
                <div className={styles["addBtn"]}><Button type="primary" icon="plus" onClick={handleAdd}></Button></div>
                <div className={styles["searchBox"]}><SearchBox inputPlaceholder={inputPlaceholder} emitEmptyhandle={emitEmptyhandle} searchValue={searchValue} onChangeSearchValue={onChangeSearchValue}  onSearchClick={onSearchClick}/></div>
            </div>
            <Table bordered loading={tableLoading} dataSource={dataSourceBufferProp} columns={newColumns}  onChange={onChangeTable} pagination={{current:paginationCurrent,defaultPageSize:paginationPageSize}}/>
        </div>
    );
}

HuskyTable.propTypes = {
};

export default HuskyTable;


  