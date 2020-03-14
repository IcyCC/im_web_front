import { Component } from 'react';
import { Form } from 'antd';
import { connect } from 'dva';
import { router } from 'umi';
import { renderedDive } from 'enzyme/src/Utils';


class Login extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>登录</div>
    )
  }
}

export default connect(({}) => {

})(Form.create()(Login));
