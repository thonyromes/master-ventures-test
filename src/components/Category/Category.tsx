import React, { VFC } from 'react';

import styles from '../../../styles/Home.module.css';

import { BallotsItemType } from '../../hooks/useBallotsGet/types';

import { NomineeCard } from '../NomineeCard';

type CategoryProps = {
  ballot: BallotsItemType;
};

const Category: VFC<CategoryProps> = (props) => (
  <section className={styles.categoryContainer}>
    <div className={styles.categoryTitleContainer}>
      <h3 className={styles.categoryTitle}>{props.ballot.title}</h3>
    </div>

    <div className={styles.categoryContent}>
      {props.ballot.items?.map((nominee) => (
        <div className={styles.nomineeCardContainer} key={nominee.id}>
          <NomineeCard nominee={nominee} />
        </div>
      ))}
    </div>
  </section>
);

export { Category };
