import request from '../utils/request';
// import carTreeDataProcessor from '../utils/transformTree.js';


// ------------------------------------调试用的参数-------------------------------
// const fore_dynamic_suffix = ".jhtml";
//调试后用的
const preURL = 'http://192.168.234.1:8800';
// const suffix = '.smvc'
const suffix = ''
// ------------------------------------------------------------------------------

// -----------------------------------正常用的参数---------------------------------
// const preURL = ''; 
// -------------------------------------------------------


/*=============================leftTopM===========================================*/
  /**
   * @name: querySearchPanelTabTitle
   * @param:
   * @description:1.1. 获取考核分类接口，左侧search面板,tabTitle
   */
  export async function queryUserObj() {
   
    let url = preURL+'/co/test'+suffix;
    var body={
    }
    return request(
              url, 
              {method:'get', body:body}
          )
  }

  /**
   * @name: queryLogin
   * @param:body:{categoryId:考核分类id,name:考核对象名称}
   * @description:1.2根据某个考核分类获取考核对象列表,模糊搜索,地图
   */
  export async function queryLogin(body) {

    let url = preURL+'/cloud/zykh/api/np/v1/uav/gis/getResourceList'+suffix;
    var body={...body}
    return request(
              url, 
              {method:'post', body:{...body}}
          )
  }


/*=============================leftTopM===========================================*/




// /*=============================YHhuskyTableM===========================================*/
  /**
   * @name: queryAddNewItem
   * @param:newItemObj:是一个对象，包括key: '0',id:'0',name: '新红0',sex:'女',
              noUser:'20161122',attr:'超级管理员',deptName:'新部门',
   * @description:接口4新增一个用户requestAddNewItem
   */
  export async function queryAddNewItem(newItemObj) {

    let url = preURL+'/cloud/zykh/api/np/v1/uav/gis/loadProductInfoXzqh'+suffix;
    var body={
      ...newItemObj
    }

    return request(
              url, 
              {method:'post', body:body}
          )
  }
  /**
   * @name: queryDeleteItem
   * @param:deleteItemId:是要删除对象的id
   * @description:接口3：用户管理。删除一个数据
   */
  export async function queryDeleteItem(deleteItemId) {
    
    let url = preURL+'/cloud/zykh/api/np/v1/uav/gis/loadProductInfoXzqh'+suffix;
    var body={
      deleteItemId:deleteItemId
    }

    return request(
              url, 
              {method:'post', body:body}
          )
  }
  /**
   * @name: queryEditItem
   * @param:newItemObj:是一个对象，包括key: '0',id:'0',name: '新红0',sex:'女',
              noUser:'20161122',attr:'超级管理员',deptName:'新部门',
   * @description:接口4新增一个用户requestAddNewItem
   */
  export async function queryEditItem(editItemObj) {
    console.log('editItemObj',editItemObj)
    let url = preURL+'/cloud/zykh/api/np/v1/uav/gis/loadProductInfoXzqh'+suffix;
    var body={
      ...editItemObj
    }

    return request(
              url, 
              {method:'post', body:body}
          )
  }
  
  
// /*=============================YHhuskyTableM===========================================*/



// /*=============================rightBottomM===========================================*/
//   /**
//    * @name: querySelectOption
//    * @param:
//    * @description:2.2. 获取无人机基本信息，请求右侧下拉的opTion
//    */
//   export async function querySelectOption() {

//     let url = preURL+'/cloud/zykh/api/np/v1/uav/gis/getUavInfo'+suffix;
//     var body={
//     }
//     return request(
//         url, 
//         {method:'post', body:body}
//     )
//   }

//   /*** 
//    * @name: queryMaskList
//    * @param: body:{idStr:,selectValue:}1.resourceIds:考核对象id字符串, 
//    * @description:2.3. 根据考核对象生成任务单,
//    */
//   export async function queryMaskList(body) {
//     let url = preURL+'/cloud/zykh/api/np/v1/uav/gis/saveTask'+suffix;
//     var body={
//       resourceIds:body.idStr,
//       uavId:body.selectValue,
//     }
//     return request(
//               url, 
//               {method:'post', body:body}
//           )
//   }
  
//   /*** 
//    * @name: queryRoadLength
//    * @param:1.resourceIds:考核对象id字符串,
//    * @param:2.uavId:无人机id
//    * @description:2.4. 根据考核对象获得路线长度,
//    */
//   export async function queryRoadLength(body) {
//     let url = preURL+'/cloud/zykh/api/np/v1/uav/gis/getRoadLength'+suffix;
//     var body={
//         ...body
//     }
//     return request(
//               url, 
//               {method:'post', body:body}
//           )
//   }
// /*=============================rightBottomM===========================================*/



// /*=============================taskOverview===========================================*/
//   /**
//    * @name: queryTaskOverview
//    * @param:
//    * @description:3.1. 任务单概况.获得左下任务单，今日工单，进行中，已完成三个字段信息
//    */
//   export async function queryTaskOverview() {
//     let url = preURL+'/cloud/zykh/api/np/v1/uav/gis/getTaskInfo'+suffix;
//     var body={
//     }
//     return request(
//               url, 
//               {method:'post', body:body}
//           )
//   }
// /*=============================taskOverview===========================================*/




// /*=============================leftBottomM===========================================*/
//   /**
//    * @name：queryListData
//    * @param:
//    * @description:3.2. 考核任务列表，listData数组
//    */
//   export async function queryListData() {

//     let url = preURL+'/cloud/zykh/api/np/v1/uav/gis/getTaskList'+suffix;
//     var body={
//     }
//     return request(
//               url, 
//               {method:'post', body:body}
//           )
//   }


//   /**
//    * @name：queryDetailsData
//    * @param:1.taskId：列表中的每个item的ID
//    * @description:3.3. 获得考核明细信息，获得左下任务单详情，detailsData数组
//    */
//   export async function queryDetailsData(body) {
//     let url = preURL+'/cloud/zykh/api/np/v1/uav/gis/getTaskDetail'+suffix;
//     var body={
//       ...body
//     }
    
//     return request(
//               url, 
//               {method:'post', body:body}
//           )
//   }

//   /**
//    * @queryDistributeTask
//    * @param:1.taskId：列表中的每个item的ID
//    * @param:2.uavId:列表中的每个item的无人机id
//    * @description:3.4任务派发 queryDistributeTask.
//    */
//   export async function queryDistributeTask(body) {
//     let url = preURL+'/cloud/zykh/api/np/v1/uav/gis/distributeTask'+suffix;
//     var body={
//       ...body
//     }
    
//     return request(
//               url, 
//               {method:'post', body:body}
//           )
//   }
// /*=============================leftBottomM===========================================*/
