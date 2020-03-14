import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import { Spin, Form, Layout, Input, Button } from 'antd';
import styles from './register.less';
import Header from 'antd/es/calendar/Header';
import { Link } from 'umi';

const FormItem = Form.Item;

class Register extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <Form className={styles.registerForm}>
          <FormItem className={styles.registerTitle}>
            MIM
          </FormItem>
          <FormItem>
            <Input placeholder={'邮箱'} className={styles.registerInput}/>
          </FormItem>
          <FormItem>
            <Input placeholder={'昵称'} className={styles.registerInput}/>
          </FormItem>
          <FormItem>
            <Input placeholder={'密码'} className={styles.registerInput}/>
          </FormItem>
          <FormItem>
            <Input placeholder={'确认'} className={styles.registerInput}/>
          </FormItem>
          <FormItem>
            <Button type={'primary'} className={styles.registerButton}>
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
