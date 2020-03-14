import { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { connect } from 'dva';
import style from './login.less';
import { Link } from 'umi';


const  FormItem  =  Form.Item;

class Login extends Component {
  render() {
    return (
      <div className={style.loginForm}>
        <Form>
          <FormItem className={style.loginTitle}>MIM</FormItem>
          <FormItem>
            <Input className={style.loginInput} placeholder={'邮箱'}/>
          </FormItem>
          <FormItem><Input className={style.loginInput} placeholder={'密码'}/></FormItem>
          <FormItem>
            <Button type={'primary'} className={style.loginButton}>登录</Button>
          </FormItem>
          <FormItem>
            <Link to={'/register'}>
              没有账户，注册一个？
            </Link>
          </FormItem>
        </Form>
      </div>

    )
  }
}

export default connect(({}) => {

})(Form.create()(Login));
