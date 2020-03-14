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
        <Form>
          <FormItem>
            <Input/>
          </FormItem>
          <FormItem>
            <Input/>
          </FormItem>
          <FormItem>
            <Button>
              注册
            </Button>
          </FormItem>
        </Form>
        <Link>
          已有帐号，前往登录
        </Link>
      </div>
    );
  }
}


export default  connect(({}) => {

})(Form.create()(Register));
