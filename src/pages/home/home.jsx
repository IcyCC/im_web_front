import { Component } from 'react';
import { connect } from 'dva';

import { Layout, Row, Col } from 'antd';

import style from './home.less';
import { Link } from 'umi';


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
              <Link to={'/home/user'}>
                用户头像
              </Link>
            </div>
            <div style={{height: '5%', backgroundColor: 'yellow'}}>
              <Link to={'/home/search'}>
                搜索框
              </Link>
            </div>
            <div>
              <Link to={'/home/im'}>
                im
              </Link>
            </div>
          </Col>
          <Col span={15}>
            {this.props.children}
          </Col>
        </Row>
      </div>
    )
  }
}

export default connect(({}) => {

})(Home);
