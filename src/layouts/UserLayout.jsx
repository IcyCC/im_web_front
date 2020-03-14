import { DefaultFooter, getMenuData, getPageTitle } from '@ant-design/pro-layout';
import { Helmet } from 'react-helmet';
import { Link } from 'umi';
import React from 'react';
import { connect } from 'dva';
import SelectLang from '@/components/SelectLang';
import styles from './UserLayout.less';

const UserLayout = props => {
  return (
      <div className={styles.container}>
        <div className={styles.lang}>
          <SelectLang />
        </div>
        <div className={styles.content}>
          <div>
            {props.children}
          </div>
        </div>
      </div>
  );
};

export default connect(({ settings }) => ({ ...settings }))(UserLayout);
