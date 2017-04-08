import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button,Spin } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;


class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
  };
  handleCancelAddNewItem=() =>{
    if (this.props['handleCancelAddNewItem']) {
      this.props['handleCancelAddNewItem']()
    } else {
      console.warn('handleCancelAddNewItem参数没传')
    }
    
  }

  handleSubmitNewItem = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        if (this.props.editUserObj) {
          if (this.props.handleSubmitEditItem) {

            this.props.handleSubmitEditItem(values)
          } else {
            console.warn('handleSubmitEditItem')
          }
        } else {
          if (this.props['handleSubmitNewItem']) {
            this.props['handleSubmitNewItem'](values)
          } else {
            console.warn('handleSubmitNewItem')
          }
        }
      }
    });
  }
   handleChange=(value) =>{
    console.log(`selected ${value}`);
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('pwd')) {
      callback('两次输入的密码不一致');
    } else {
      callback();
    }
  }
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 8 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 12 },
        sm: { span: 14 },
      },
    };

    return (
      
      
    <Spin spinning={this.props["AddNewItemLoading"]}>
    <div>
      <Form onSubmit={this.handleSubmitNewItem}>
        <FormItem
          {...formItemLayout}
          label="用户姓名"
          hasFeedback
        >
          {getFieldDecorator('name', {
            rules: [{
               message: '长度小于14',min:1,max:14
            }, {
              required: true, message: '请输入用户姓名',
            }],
            initialValue: this.props.editUserObj?this.props.editUserObj.name:null,
          })(
            <Input placeholder="请输入用户姓名"/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="学 /工号"
          hasFeedback
        >
          {getFieldDecorator('noUser', {
            rules: [{
               message: '长度小于14',min:1,max:14
            }, {
              required: true, message: '请输入工号或者学号',
            }],
            initialValue: this.props.editUserObj?this.props.editUserObj.noUser:null,
          })(
            <Input placeholder="请输入工号或者学号"/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="用户密码"
          hasFeedback
        >
        {getFieldDecorator('pwd', {
          rules: [{
            required: true, message: '请输入登录密码',
          }, {
            validator: this.checkConfirm,
          }],
          initialValue: this.props.editUserObj?this.props.editUserObj.pwd:null,
        })(
          <Input placeholder="请输入登录密码" type="password" />
        )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="确认密码"
          hasFeedback
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: '请确认登录密码',
            }, {
              validator: this.checkPassword,
            }],
            initialValue: this.props.editUserObj?this.props.editUserObj.pwd:null,
          })(
              
            <Input placeholder="请确认登录密码" type="password" onBlur={this.handleConfirmBlur} />
          )}
        </FormItem>
       
        <FormItem
          {...formItemLayout}
          label="所在部门"
        >
          {getFieldDecorator('deptName', {
           
            rules: [{required: true, message: '请选择部门' }],
            initialValue: this.props.editUserObj?this.props.editUserObj.deptName:null,            
          })(
            <Select
              showSearch
              placeholder="请选择部门"
              optionFilterProp="children"
              onChange={this.handleSelectChange}
              filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              
            >
              <Option key='0444444' value="13计科">13计科</Option>
              <Option key='145454554' value="13软工">13软工</Option>
              <Option key='2234243' value="14信管">14信管</Option>
              <Option key='34444' value="15金融">15金融</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="用户性别"
        >
          {getFieldDecorator('sex', {
            rules: [{required: true, message: '请选择性别' }],
            initialValue: this.props.editUserObj?this.props.editUserObj.sexText:null,            
          })(
            <Select
              onChange={this.handleSelectChange}
              placeholder="请选择性别"
              
            >
              <Option key='12' value="1">男</Option>
              <Option key='14' value="0">女</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="身份权限"
        >
          {getFieldDecorator('attr', {
            rules: [{required: true, message: '请选择身份权限' }],
            initialValue: this.props.editUserObj?this.props.editUserObj.attrText:null,            
          })(
            <Select
              placeholder="请选择身份权限"
              onChange={this.handleSelectChange}
            >
              <Option value="0">普通用户</Option>
              <Option value="1">管理员</Option>
              <Option value="2">超级管理员</Option>
            </Select>
          )}
        </FormItem>
        <FormItem>
        <Row>
          <Col className="gutter-row" offset={12} span={4}>
            <Button type="primary" htmlType="submit" size="large">确定</Button>
          </Col>
          <Col className="gutter-row" span={4}>
            <Button type="primary" onClick={this.handleCancelAddNewItem} size="large">取消</Button>
          </Col>
        </Row>
        </FormItem>
      </Form></div></Spin>
    );
  }
}

const AddNewItemComponent = Form.create(onFieldsChange)(RegistrationForm);
const onFieldsChange=(props, fields) => {
}

export default AddNewItemComponent