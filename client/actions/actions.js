import * as types from '../constants/actionTypes';

export const sendSearchActionCreator = (city) => ({
    type: types.SEND_SEARCH,
    payload: city
});

export const acceptButtonActionCreator = () => ({
    type: types.ACCEPT_BUTTON,
});

export const rejectButtonActionCreator = () => ({
    type: types.REJECT_BUTTON,
});

export const favouritesButtonActionCreator = () => ({
    type: types.FAVOURITES_BUTTON,
});

export const favouritesListActionCreator = () => ({
    type: types.FAVOURITES_LIST,
});


