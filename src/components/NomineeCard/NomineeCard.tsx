import React, { VFC } from 'react';
import Image from 'next/image';

import styles from '../../../styles/Home.module.css';

import { NomineeType } from '../../hooks/useBallotsGet/types';

type NomineeCardProps = {
  nominee: NomineeType;
};

const NomineeCard: VFC<NomineeCardProps> = (props) => (
  <div className={styles.nomineeCard}>
    <h4 className={styles.nomineeCardTitle}>{props.nominee.title}</h4>
    <div className={styles.nomineeCardImageContainer}>
      <Image
        alt="Nominee"
        src={props.nominee.photoUrL}
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
