import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
    THEMES,
} from '../../constants/constants';

import styles from './Button.scss';

const Button = (props) => {
    const themeClass = styles[`${props.theme}`];
    const roundedClass = props.rounded && styles.rounded;

    const className = classnames(
        styles.button,
        props.className,
        themeClass,
        roundedClass,
    );

    return (
        <button
            id={props.id}
            className={className}
            onClick={props.onClick}
            disabled={props.disabled}
            aria-label={props.label}
            aria-pressed={props.isToggle && props.isSelected}
            autoFocus={props.autofocus}
        >
            {props.children}
        </button>
    );
};

Button.defaultProps = {
    theme: THEMES.PRIMARY,
};

Button.propTypes = {
    // actions
    onClick: PropTypes.func.isRequired,

    // props
    theme: PropTypes.oneOf(
        Object.keys(THEMES).map(theme => THEMES[theme]),
    ),
    id: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.element,
        PropTypes.string,
    ]).isRequired,
    label: PropTypes.string,
    isSelected: PropTypes.bool,
    isToggle: PropTypes.bool,
    disabled: PropTypes.bool,
    autofocus: PropTypes.bool,
    rounded: PropTypes.bool,
};

export default Button;
