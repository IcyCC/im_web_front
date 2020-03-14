import { Component } from 'react';
import { connect } from 'dva';

class Home extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div></div>
    )
  }
}

export default connect(({}) => {

})(Home);
