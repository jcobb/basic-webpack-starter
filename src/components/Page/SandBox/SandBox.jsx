import React, { Component } from 'react';

import styles from './SandBox.scss';

class SandBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            val: '',
        };
    }

    render() {
        return (
            <div className={styles.sandbox} />
        );
    }
}

export default SandBox;
