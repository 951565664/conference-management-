
export default {

  namespace: 'SBhuskyTableM',
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
            sorter: (a, b) => a.age - b.age,
        },{
            title: 'age',
            dataIndex: 'age',
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
            sorter: (a, b) => a.age - b.age,
            onFilter: (value, record) => record.age.indexOf(value) == 0,
        },{
            title: 'address',
            dataIndex: 'address',
            editable: false,
            sorter: (a, b) => a.age - b.age,
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
          name: 'Edward King 0',
          age: '01',
          address: 'London, Park Lane no. 0',
          editable:false,
      }, {
          key: '1',
          name: 'Edward King 1',
          age: '1',
          address: 'London, Park Lane no. 1',
          editable:false,
      }, {
          key: '2',
          name: 'Edward King 2',
          age: '2',
          address: 'London, Park Lane no. 1',
          editable:false,
      }, {
          key: '3',
          name: 'Edward King 3',
          age: '3',
          address: 'London, Park Lane no. 1',
          editable:false,
      },{
          key: '4',
          name: 'Edward King 4',
          age: '4',
          address: 'London, Park Lane no. 0',
          editable:false,
      }, {
          key: '5',
          name: 'Edward King 5',
          age: '5',
          address: 'London, Park Lane no. 1',
          editable:false,
      }, {
          key: '6',
          name: 'Edward King 6',
          age: '6',
          address: 'London, Park Lane no. 1',
          editable:false,
      }, {
          key: '7',
          name: 'Edward King 7',
          age: '7',
          address: 'New York No. 1 Lake Park',
          editable:false,
      }, {
          key: '8',
          name: 'Edward King 8',
          age: '8',
          address: 'London, Park Lane no. 1',
          editable:false,
      }, {
          key: '9',
          name: 'Edward King 9',
          age: '9',
          address: 'New York No. 1 Lake Park',
          editable:false,
      }, {
          key: '10',
          name: 'Edward King 10',
          age: '10',
          address: 'London, Park Lane no. 1',
          editable:false,
      }
    ],

    // table数据数组的缓存(保存修改的，还未确认的值)
    dataSourceBuffer:[{
          key: '0',
          name: 'Edward King 0',
          age: '32',
          address: 'London, Park Lane no. 0',
          editable:false,
      }, {
          key: '1',
          name: 'Edward King 1',
          age: '32',
          address: 'New York No. 1 Lake Park',
          editable:false,
      }, {
          key: '2',
          name: 'Edward King 2',
          age: '32',
          address: 'London, Park Lane no. 1',
          editable:false,
      }, {
          key: '3',
          name: 'Edward King 3',
          age: '32',
          address: 'London, Park Lane no. 1',
          editable:false,
      },{
          key: '4',
          name: 'Edward King 4',
          age: '32',
          address: 'London, Park Lane no. 0',
          editable:false,
      },  {
          key: '5',
          name: 'Edward King 5',
          age: '32',
          address: 'London, Park Lane no. 1',
          editable:false,
      }, {
          key: '6',
          name: 'Edward King 6',
          age: '32',
          address: 'London, Park Lane no. 1',
          editable:false,
      }, {
          key: '7',
          name: 'Edward King 7',
          age: '32',
          address: 'London, Park Lane no. 1',
          editable:false,
      }, {
          key: '8',
          name: 'Edward King 8',
          age: '32',
          address: 'London, Park Lane no. 1',
          editable:false,
      }, {
          key: '9',
          name: 'Edward King 9',
          age: '32',
          address: 'London, Park Lane no. 1',
          editable:false,
      }, {
          key: '10',
          name: 'Edward King 10',
          age: '32',
          address: 'London, Park Lane no. 1',
          editable:false,
      }
    ],
    // table当前分页值
    paginationCurrent:1,
    // 当前分页的条目数量
    paginationPageSize:4,

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
