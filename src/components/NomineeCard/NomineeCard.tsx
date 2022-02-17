import React, { VFC } from 'react';
import Image from 'next/image';

import styles from '../../../styles/Home.module.css';

type NomineeCardProps = {};

const NomineeCard: VFC = (props) => (
  <div className={styles.nomineeCard}>
    <h4 className={styles.nomineeCardTitle}>Nominee</h4>
    <div className={styles.nomineeCardImageContainer}>
      <Image
        alt="Nominee"
        src="https://bit.ly/naruto-sage"
        height="100px"
        width="100px"
        className={styles.nomineeCardImage}
      />
    </div>
    <div className={styles.nomineeCardButtonContainer}>
      <button type="button" className={styles.nomineeCardButton}>
        Select
      </button>
    </div>
  </div>
);

export { NomineeCard };
