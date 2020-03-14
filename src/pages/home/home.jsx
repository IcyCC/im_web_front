import { Component } from 'react';
import { connect } from 'dva';

import { Layout, Row, Col } from 'antd';

import style from './home.less';


class Home extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <Row className={style.body}>
          <Col span={6} style={{backgroundColor: 'red', height: '100%'}}>
            <div style={{height: '15%', backgroundColor: 'white'}}>
              用户头像
            </div>
            <div style={{height: '5%', backgroundColor: 'yellow'}}>
              搜索框
            </div>
            <div>
              群聊信息
            </div>
          </Col>
          <Col span={15}>
            主功能区
          </Col>
        </Row>
      </div>
    )
  }
}

export default connect(({}) => {

})(Home);
