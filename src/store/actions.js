import { ACTION_TYPES } from '../constants/constants';

export const setAppIdle = () => ({
    type: ACTION_TYPES.SET_APP_IDLE,
});

export const openModal = modalContent => ({
    type: ACTION_TYPES.OPEN_MODAL,
    modalContent,
});

export const closeModal = () => ({
    type: ACTION_TYPES.CLOSE_MODAL,
});

export const removeModalContent = () => ({
    type: ACTION_TYPES.REMOVE_MODAL_CONTENT,
});
