import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { connect } from 'dva';
import style from './login.less';
import { Link } from 'umi';
import styles from './login.less';


const  FormItem  =  Form.Item;

class Login extends Component {
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
        <Form className={style.loginForm} onSubmit={this.handleSubmit}>
          <FormItem className={styles.loginTitle}>
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
            })( <Input placeholder={'邮箱'} className={styles.loginInput}/>)}
          </FormItem>
          <FormItem>
            {getFieldDecorator('user_password', {
              rules: [
                {
                  required: true,
                  message: '请输入你的密码'
                }
              ]}
            )(<Input.Password placeholder={'密码'} className={styles.loginInput}/>)}
          </FormItem>
          <FormItem>
            <Button type={'primary'} className={styles.loginButton} htmlType={'submit'}>
              登录
            </Button>
          </FormItem>
          <FormItem>
            <Link to={'/register'}>
              没有帐号，前往注册
            </Link>
          </FormItem>
        </Form>
      </div>

    )
  }
}

export default connect(({}) => {

})(Form.create()(Login));
