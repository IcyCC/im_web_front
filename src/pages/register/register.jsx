import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import { Spin, Form, Layout, Input, Button } from 'antd';
import styles from './register.less';
import Header from 'antd/es/calendar/Header';
import { Link } from 'umi';

const FormItem = Form.Item;

class Register extends React.Component {
  state = {
    confirmDirty: false
  };

  constructor(props) {
    super(props);
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('user_password')) {
      callback('密码不一致!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };


  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form className={styles.registerForm} onSubmit={this.handleSubmit}>
          <FormItem className={styles.registerTitle}>
            MIM
          </FormItem>
          <FormItem>
            {getFieldDecorator('user_email', {
              rules: [
                {
                  type: 'email',
                  message: "邮箱格式非法"
                },
                {
                  required: true,
                  message: '请输入你的邮箱'
                }
              ]
            })( <Input placeholder={'邮箱'} className={styles.registerInput}/>)}
          </FormItem>
          <FormItem>
            {getFieldDecorator('user_name', {
                rules: [
                  {
                    required: true,
                    message: '请输入你的用户名'
                  },
                ]
            })(<Input placeholder={'用户名'} className={styles.registerInput}/>)}
          </FormItem>
          <FormItem>
            {getFieldDecorator('user_password', {
              rules: [
                {
                  required: true,
                  message: '请输入你的密码'
                },
                {
                  validator: this.validateToNextPassword
                }
              ]}
            )(<Input.Password placeholder={'密码'} className={styles.registerInput}/>)}
          </FormItem>
          <FormItem>
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: '请确认你的密码'
                },
                {
                  validator: this.compareToFirstPassword
                }
              ]}
            )(<Input.Password placeholder={'密码'} className={styles.registerInput} onBlur={this.handleConfirmBlur}/>)}
              </FormItem>
          <FormItem>
            <Button type={'primary'} className={styles.registerButton} htmlType={'submit'}>
              注册
            </Button>
          </FormItem>
          <FormItem>
            <Link to={'/login'}>
              已有帐号，前往登录
            </Link>
          </FormItem>
        </Form>
      </div>
    );
  }
}


export default  connect(({}) => {

})(Form.create()(Register));
