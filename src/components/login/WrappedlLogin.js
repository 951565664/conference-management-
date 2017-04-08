import React from 'react';
import { connect } from 'dva';
import createHashHistory from 'history/createHashHistory'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
import styles from'./WrappedLogin.less';

const hashHistory = createHashHistory()


class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {

        this.props['dispatch']({
          type: 'mainM/requestUserObj',
          payload: {noUser:values.noUser,psd:values.noUser,/*remember:values.remember*/}
        });
      }
    });
    // hashHistory.push('/')
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className={styles['login-form']}>
        <FormItem>
          {getFieldDecorator('noUser', {
            rules: [{ required: true, message: '请输入工号或者学号' }],
          })(
            <Input addonBefore={<Icon type="user" />} placeholder="工号或学号" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('psd', {
            rules: [{ required: true, message: '请输入您的密码' }],
          })(
            <Input addonBefore={<Icon type="lock" />} type="password" placeholder="密码" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>记住密码</Checkbox>
          )}
          <a className={styles['login-form-forgot']}>忘记密码</a>
          <Button type="primary" htmlType="submit" className={styles['login-form-button']}>
            登录
          </Button>
          <a className={styles['login-form-forgot']}>申请注册</a>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create(onFieldsChange)(NormalLoginForm);

const onFieldsChange=(props, fields) => {
}

export default WrappedNormalLoginForm;