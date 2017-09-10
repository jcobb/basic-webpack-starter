import React, { PropTypes } from 'react';
import classnames from 'classnames';
import styles from './Modal.scss';

// Modal
// the modal is always present in the DOM and provides a full screen canvas for
// modal content to animate in/out of when activated
const Modal = (props) => {
    // modal content will either be a Component, or null
    const Handler = props.uiState.modalContent;

    const modalIsOpen = (
        props.uiState.modalContent
        && !props.uiState.modalIsClosing
    );

    const className = classnames(
        styles.wrapper,
        { [`${styles.isOpen}`]: modalIsOpen },
    );

    // click handler: only close modal if the modal wrapper (overlay) is the target
    const handleClick = (event) => {
        if (event.target === this.el) props.closeModal();
    };

    // if the modal is closing we wait for the modal transition to end before removing
    // the modal content from the DOM
    if (props.uiState.modalIsClosing) {
        this.el.addEventListener('transitionend', props.removeModalContent, { once: true });
    }

    return ( // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
            onClick={handleClick}
            className={className}
            ref={(el) => { this.el = el; }}
        >
            {Handler && <Handler {...props} />}
        </div>
    );
};

Modal.propTypes = {
    // actions
    closeModal: PropTypes.func.isRequired,
    removeModalContent: PropTypes.func.isRequired,
    // props
    uiState: PropTypes.shape({
        modalContent: PropTypes.func, // Components are functions
        modalIsClosing: PropTypes.bool.isRequired,
    }).isRequired,
};

export default Modal;
