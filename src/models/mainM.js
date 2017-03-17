
export default {

  namespace: 'mainM',

  state: {
    menuCurrent:'WZ',
    WZcolumns: [
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
    SBcolumns: [
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
    LXcolumns: [
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
    BMcolumns: [
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
    YHcolumns: [
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
    KQcolumns: [
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
    JLcolumns: [
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


    WZdataSource : [{
          key: '0',
          name: 'joke King 0',
          age: '01',
          address: 'London, Park Lane no. 0',
          editable:false,
      }, {
          key: '1',
          name: 'joke King 1',
          age: '1',
          address: 'London, Park Lane no. 1',
          editable:false,
      }, {
          key: '2',
          name: 'joke King 2',
          age: '2',
          address: 'London, Park Lane no. 1',
          editable:false,
      }, {
          key: '3',
          name: 'joke King 3',
          age: '3',
          address: 'London, Park Lane no. 1',
          editable:false,
      },{
          key: '4',
          name: 'joke King 4',
          age: '4',
          address: 'London, Park Lane no. 0',
          editable:false,
      }, {
          key: '5',
          name: 'joke King 5',
          age: '5',
          address: 'London, Park Lane no. 1',
          editable:false,
      }, {
          key: '6',
          name: 'joke King 6',
          age: '6',
          address: 'London, Park Lane no. 1',
          editable:false,
      }, {
          key: '7',
          name: 'joke King 7',
          age: '7',
          address: 'New York No. 1 Lake Park',
          editable:false,
      }, {
          key: '8',
          name: 'joke King 8',
          age: '8',
          address: 'London, Park Lane no. 1',
          editable:false,
      }, {
          key: '9',
          name: 'joke King 9',
          age: '9',
          address: 'New York No. 1 Lake Park',
          editable:false,
      }, {
          key: '10',
          name: 'joke King 10',
          age: '10',
          address: 'London, Park Lane no. 1',
          editable:false,
      }
    ],
    // table数据数组的缓存(保存修改的，还未确认的值)
    WZdataSourceBuffer:[{
          key: '0',
          name: 'joke 0',
          age: '32',
          address: 'London, Park Lane no. 0',
          editable:false,
      }, {
          key: '1',
          name: 'joke 1',
          age: '32',
          address: 'New York No. 1 Lake Park',
          editable:false,
      }, {
          key: '2',
          name: 'joke 2',
          age: '32',
          address: 'London, Park Lane no. 1',
          editable:false,
      }, {
          key: '3',
          name: 'joke 3',
          age: '32',
          address: 'London, Park Lane no. 1',
          editable:false,
      },{
          key: '4',
          name: 'joke 4',
          age: '32',
          address: 'London, Park Lane no. 0',
          editable:false,
      },  {
          key: '5',
          name: 'joke 5',
          age: '32',
          address: 'London, Park Lane no. 1',
          editable:false,
      }, {
          key: '6',
          name: 'joke 6',
          age: '32',
          address: 'London, Park Lane no. 1',
          editable:false,
      }, {
          key: '7',
          name: 'joke 7',
          age: '32',
          address: 'London, Park Lane no. 1',
          editable:false,
      }, {
          key: '8',
          name: 'joke 8',
          age: '32',
          address: 'London, Park Lane no. 1',
          editable:false,
      }, {
          key: '9',
          name: 'joke 9',
          age: '32',
          address: 'London, Park Lane no. 1',
          editable:false,
      }, {
          key: '10',
          name: 'joke 10',
          age: '32',
          address: 'London, Park Lane no. 1',
          editable:false,
      }
    ],
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    updataSuccess(state, action) {
      return { ...state, ...action.payload };
    },
    menuCurrentUpdata(state, action) {
      return { ...state, ...action.payload };
    },
    
  },

};
