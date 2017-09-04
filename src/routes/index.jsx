import React from 'react';
import PropTypes from 'prop-types';
import {
  connect
} from 'dva';

import {
  getScreenHeight
} from './../utils/tools.js';
import styles from './index.less';

function Index({
  location
}) {
  return (
    <div className={styles.fixed_wrapper}>
      <div className={styles.scoll_wrapper}>
        <div className={styles.label_logo}></div>

        <div className={styles.one_screen} style={{height: getScreenHeight()}}>
          <div className={styles.div_shine}></div>
        </div>

        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
    </div>
  );
}

Index.propTypes = {
  location: PropTypes.object.isRequired
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Index);
