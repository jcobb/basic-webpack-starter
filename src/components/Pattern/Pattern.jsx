import React from 'react';

import styles from './Pattern.scss';

const Pattern = () => (
    <div className={styles.background}>
        <div className={styles.stripeOne}>
            <div className={styles.stripeTwo} />
        </div>
        <div className={styles.stripeThree} />
    </div>
);

export default Pattern;
