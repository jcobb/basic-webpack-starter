// dependencies
import React, { PropTypes } from 'react';

// components
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import MenuDrawer from '../MenuDrawer/MenuDrawer';

// styles
import styles from './Header.scss';

const Header = props => (
    <header className={styles.wrapper}>
        <div className={styles.appBar}>
            <Button
                theme="none"
                onClick={() => props.openModal(MenuDrawer)}
            >
                <Icon icon={Icon.ICONS.MENU} />
            </Button>
        </div>

        {props.isExtended && (
            <div className={styles.extended}>
                <Icon icon={Icon.ICONS.LOGO} size={30} />
                <span className={styles.title}>placehldr</span>
            </div>
        )}

        {props.showToolbar && (
            <div className={styles.toolBar} />
        )}
    </header>
);

Header.propTypes = {
    openModal: PropTypes.func.isRequired,
    showToolbar: PropTypes.bool.isRequired,
    isExtended: PropTypes.bool.isRequired,
};

Header.defaultProps = {
    showToolbar: false,
    isExtended: true,
};

export default Header;
