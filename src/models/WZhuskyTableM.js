
export default {

  namespace: 'WZhuskyTableM',
  state: {


    // 查询的键值
    searchValue:'',
    // tableTitle
    columns: [
        {
            title: 'name',
            dataIndex: 'name',
            width: '30%',
            editable: false,
            sorter: (a, b) => a.name - b.name,
        },{
            title: 'index',
            dataIndex: 'index',
            editable: false,
            filters: [{
                text: '0',
                value: '0',
            }, {
                text: '1',
                value: '1',
            }, 
            ],
            filterMultiple: true,
            sorter: (a, b) => a.index - b.index,
            onFilter: (value, record) => record.index.indexOf(value) == 0,
        },{
            title: 'address',
            dataIndex: 'address',
            editable: false,
            sorter: (a, b) => a.address - b.address,
            filters: [{
                text: 'London',
                value: 'London',
            }, {
                text: 'New York',
                value: 'New York',
            }],
            filterMultiple: false,
            onFilter: (value, record) => record.address.indexOf(value) === 0,
        },{
            title: 'operation',
            dataIndex: 'operation',
            editable: false,
            width:120,
        }
    ],

    //table数据数组
    dataSource : [{
          key: '0',
          name: 'F100',
          index: '0',
          address: 'London, Park Lane no. 0',
          editable:false,
      }, {
          key: '1',
          name: 'F101',
          index: '1',
          address: 'London, Park Lane no. 1',
          editable:false,
      }, {
          key: '2',
          name: 'F102',
          index: '2',
          address: 'London, Park Lane no. 1',
          editable:false,
      }, {
          key: '3',
          name: 'F103',
          index: '3',
          address: 'London, Park Lane no. 1',
          editable:false,
      },{
          key: '4',
          name: 'F104',
          index: '4',
          address: 'London, Park Lane no. 0',
          editable:false,
      }, {
          key: '5',
          name: 'F105',
          index: '5',
          address: 'London, Park Lane no. 1',
          editable:false,
      }, {
          key: '6',
          name: 'F106',
          index: '6',
          address: 'London, Park Lane no. 1',
          editable:false,
      }, {
          key: '7',
          name: 'F107',
          index: '7',
          address: 'New York No. 1 Lake Park',
          editable:false,
      }, {
          key: '8',
          name: 'F108',
          index: '8',
          address: 'London, Park Lane no. 1',
          editable:false,
      }, {
          key: '9',
          name: 'F109',
          index: '9',
          address: 'New York No. 1 Lake Park',
          editable:false,
      }, {
          key: '10',
          name: 'F1010',
          index: '10',
          address: 'London, Park Lane no. 1',
          editable:false,
      }
    ],

    // table数据数组的缓存(保存修改的，还未确认的值)
    dataSourceBuffer:[
    ],
    // table当前分页值
    paginationCurrent:1,
    // 当前分页的条目数量
    paginationPageSize:5,

    // table条目的总数
    dataSourceLength:11,


    isEditLock:false,
    isNewItem:false,

    

    // editableCellValue的缓存
    // editableCellValue:'',
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/') {

          dispatch({ type: 'updataBuffer', });
          
        }
      });
    },
  },

  effects: {
    *fetchRemote({ payload }, { call, put }) {
    },
  },

  reducers: {
    fetch(state, action) {
      return { ...state, ...action.payload };
    },
    updateState(state, action) {
      return { ...state, ...action.payload };
    },
    updataBuffer(state, action) {
      return { ...state, dataSourceBuffer:state.dataSource };
    },
    
    
  },

}
