import React, { VFC } from 'react';

import styles from '../../../styles/Home.module.css';

import { NomineeCard } from '../NomineeCard';

type CategoryProps = {};

const Category: VFC = (props) => (
  <div className={styles.categoryContainer}>
    <div className={styles.categoryTitleContainer}>
      <h3 className={styles.categoryTitle}>Category 1</h3>
    </div>
    <div className={styles.categoryContent}>
      <div className={styles.nomineeCardContainer}>
        <NomineeCard />
      </div>
      <div className={styles.nomineeCardContainer}>
        <NomineeCard />
      </div>
      <div className={styles.nomineeCardContainer}>
        <NomineeCard />
      </div>
      <div className={styles.nomineeCardContainer}>
        <NomineeCard />
      </div>
    </div>
  </div>
);

export { Category };
