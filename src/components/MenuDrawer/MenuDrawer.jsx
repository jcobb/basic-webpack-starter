import React, { PropTypes } from 'react';
import classnames from 'classnames';

import styles from './MenuDrawer.scss';

const MenuDrawer = (props) => {
    const className = classnames(
        styles.wrapper,
        { [`${styles.isClosing}`]: props.uiState.modalIsClosing },
    );

    return (
        <div className={className} />
    );
};

MenuDrawer.propTypes = {
    uiState: PropTypes.shape({
        modalIsClosing: PropTypes.bool.isRequired,
    }).isRequired,
};

export default MenuDrawer;
