import React, { FC } from 'react';

import styles from '../../../styles/Buttons.module.css';

type FloatingButtonProps = {};

const FloatingButton: FC = (props) => (
  <div className={styles.floatingButtonContainer}>
    <button type="button" className={styles.floatingButton}>
      {props.children}
    </button>
  </div>
);

export { FloatingButton };
