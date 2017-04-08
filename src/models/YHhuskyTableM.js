import { queryYHdataSource, queryAddNewItem, queryDeleteItem, queryEditItem } from '../services/remoteData';
import { message } from 'antd';

export default {

    namespace: 'YHhuskyTableM',
    state: {
        // 查询的键值
        searchValue: '',
        // tableTitle
        columns: [
            {
                title: '编号',
                dataIndex: 'id',
                editable: false,
                sorter: (a, b) => a.id - b.id,
            }, {
                title: '证件号',
                dataIndex: 'noUser',
                editable: false,
                sorter: (a, b) => a.noUser - b.noUser,
            }, {
                title: '用户名',
                dataIndex: 'name',
                editable: false,
            }, {
                title: '性别',
                dataIndex: 'sexText',
                editable: false,
                sorter: (a, b) => a.sex - b.sex,

            }, {
                title: '身份',
                dataIndex: 'attrText',
                editable: false,
                sorter: (a, b) => a.attr - b.attr,
            }, {
                title: '部门',
                dataIndex: 'deptName',
                editable: false,
            }, {
                title: 'operation',
                dataIndex: 'operation',
                editable: false,
                width: 120,
            }
        ],

        //table数据数组
        dataSource: [
            {
                key: '0',
                id: '0',
                name: '小红0',
                noUser: '1327405000',
                sex: 0,
                sexText:'女',
                attr: 2,
                attrText: '超级管理员',
                deptName: '13计科',
                pwd: 123456,
                editable: false,
            }, {
                key: '1',
                id: '1',
                name: '小红1',
                noUser: '1327405001',
                sex: 0,
                sexText:'女',
                attr: 1,
                attrText: '管理员',
                deptName: '13计科',
                pwd: 123456,
                editable: false,
            }, {
                key: '2',
                id: '2',
                name: '小明2',
                noUser: '1327405002',
                sex: 1,
                sexText:'男',
                attr: 0,
                attrText: '普通用户',
                deptName: '13计科',
                pwd: 123456,
                editable: false,
            }, {
                key: '3',
                id: '3',
                name: '小明3',
                noUser: '1327405000',
                sex: 1,
                sexText:'男',
                attr: 1,
                attrText: '管理员',
                deptName: '13计科',
                pwd: 123456,
                editable: false,
            },
        ],

        // table数据数组的缓存(保存修改的，还未确认的值)
        dataSourceBuffer: [
            {
                key: '0',
                id: '0',
                name: '小明0',
                noUser: '1327405000',
                sex: 1,
                sexText:'男',
                attr: 0,
                attrText: '普通用户',
                deptName: '13计科',
                pwd: 123456,
                editable: false,
            }, {
                key: '1',
                id: '1',
                name: '小明1',
                noUser: '1327405001',
                sex: 1,
                sexText:'男',
                attr: 0,
                attrText: '普通用户',
                deptName: '13计科',
                pwd: 123456,
                editable: false,
            }, {
                key: '2',
                id: '2',
                name: '小明2',
                noUser: '1327405002',
                sex: 1,
                sexText:'男',
                attr: 0,
                attrText: '普通用户',
                deptName: '13计科',
                pwd: 123456,
                editable: false,
            }, {
                key: '3',
                id: '3',
                name: '小明3',
                noUser: '1327405003',
                sex: 1,
                sexText:'男',
                attr: 0,
                attrText: '普通用户',
                deptName: '13计科',
                pwd: 123456,
                editable: false,
            }, {
                key: '4',
                id: '4',
                name: '小明4',
                noUser: '1327405004',
                sex: 1,
                sexText:'男',
                attr: 0,
                attrText: '普通用户',
                deptName: '13计科',
                pwd: 123456,
                editable: false,
            },
        ],
        // table当前分页值
        paginationCurrent: 1,
        // 当前分页的条目数量
        paginationPageSize: 5,

        // table条目的总数
        dataSourceLength: 11,
        isEditLock: false,
        isNewItem: false,
        isAddNewItem: false,//是否需要
        // isCanOrder:'false',

        inputPlaceholder: '请输入用户工号或学号',
        searchOptionIndex: 'noUser',
        // editableCellValue的缓存
        // editableCellValue:'',
        tableLoading: false,
        AddNewItemLoading: false,

        //修改的对象当前属性
        editUserObj: undefined,
        /*{
              key: '0',
              id:'0',
              name: '小红0',
              noUser:'1327405000',
              sex:'女',
              sexText:'女',
              attr:'超级管理员',
              attrText:'超级管理员',
              deptName:'13计科',
              pwd:123456,
              editable:false,
          }*/
    },

    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(location => {
                if (location.pathname === '/IndexPage') {
                    dispatch({ type: 'requestYHdataSource', });
                    //   dispatch({ type: 'requestTaskOverview', });
                }
                if (location.pathname === '/') {
                    dispatch({ type: 'updateBuffer', });
                    //   dispatch({ type: 'requestTaskOverview', });
                }
            });
        },
    },

    effects: {
        /**
         * @name requestYHdataSource
         * @param 
         * @description 进入到页面请求的数据
         */
        *requestYHdataSource({ payload }, { call, put }) {
            yield put({
                type: 'updateState',
                payload: {
                    tableLoading: true,
                }
            });
            // const { data } = yield call(queryYHdataSource);
            const data = [{
                key: '0',
                id: '0',
                name: '新红0',
                noUser: '20161122',
                sex: 0,
                sexText:'女',
                attr: 2,
                attrText: '超级管理员',
                deptName: '新部门',
            }]
            if (data) {
                yield put({
                    type: 'updateDataSource',
                    payload: data
                });
                yield put({
                    type: 'updateState',
                    payload: {
                        tableLoading: false,
                    }
                });
            }
        },

        /**
         * @name requestAddNewItem
         * @param payload:{name: 用户名，noUser:工号，pw
         * attr:权限，deptName:部门名字}d:密码
                    sex:Text性别，attr:权限，deptName:部门名字}
                    sexText:门名字}
         * @description 新增一条用户数据，向后台发出新增请求
         */
        *requestAddNewItem({ payload }, { call, put }) {
            yield put({
                type: 'updateState',
                payload: {
                    AddNewItemLoading: true,
                }
            });
            const { data } = yield call(() => queryAddNewItem(payload));
            // const data = {result:1};
            if (data) {
                if (data.result) {
                    message.success('添加成功')
                    //退出新增弹出框
                    yield put({
                        type: 'updateState',
                        payload: { isAddNewItem: false, AddNewItemLoading: false }
                    });
                    //重新请求表格数据
                    yield put({
                        type: 'requestYHdataSource',
                    });
                }
            }
            else {
                message.error('添加失败')
            }
        },

        /**
         * @name requestDeleteItem
         * @param payload:删除的编号(id)
         * @description 删除一条用户数据，向后台发出删除请求，成功后需要重新请求所有的新数据
         */
        *requestDeleteItem({ payload }, { call, put }) {
            yield put({
                type: 'updateState',
                payload: {
                    tableLoading: true,
                }
            });
            const { data } = yield call(() => queryDeleteItem(payload));
            // const data = {result:1};
            if (data) {
                if (data.result) {
                    message.success('删除成功')
                    //解除动画
                    yield put({
                        type: 'updateState',
                        payload: { tableLoading: false }
                    });
                    //重新请求表格数据
                    yield put({
                        type: 'requestYHdataSource',
                    });
                }
            }
            else {
                message.error('删除失败')
            }
        },
        /**
         * @name requestEditItem
         * @param payload:修改的值，{id:编号，name: 用户名，noUser:工号，pwd:密码
                                    sex:性别，attr:权限，deptName:部门名字}
                                    }
         * @description 删除一条用户数据，向后台发出删除请求，成功后需要重新请求所有的新数据
         */
        *requestEditItem({ payload }, { call, put }) {
            console.log(payload)
            yield put({
                type: 'updateState',
                payload: {
                    tableLoading: true,
                }
            });
            const { data } = yield call(() => queryEditItem(payload));
            // const data = {result:1};
            if (data) {
                if (data.result) {
                    message.success('修改成功')
                    //解除动画
                    yield put({
                        type: 'updateState',
                        payload: { tableLoading: false }
                    });
                    //重新请求表格数据
                    yield put({
                        type: 'requestYHdataSource',
                    });
                }
            }
            else {
                message.error('修改失败')
            }
        },
        
    },

    reducers: {
        updateState(state, action) {
            return { ...state, ...action.payload };
        },

        updateBuffer(state, action) {
            return { ...state, dataSourceBuffer:state.dataSource };
        },
        updateDataSource(state, action) {
            let newDataSource = action.payload.map(
                (item, index) => {
                    return {
                        ...item,
                        pwd: 123456,
                        editable: false,
                    }
                }
            )
            return { ...state, dataSource: newDataSource, dataSourceBuffer: newDataSource };
        },
    },

}
