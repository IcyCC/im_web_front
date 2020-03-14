import React from 'react';
import { Row, Col } from 'antd';
import styles from '@/layouts/HomeLayout.less';


const HomeLayout = props => {
  return (
    <div span={16} className={styles.homeLayout}>
      <div>
        {props.children}
      </div>
    </div>
  );
};

export default HomeLayout;
