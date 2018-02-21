import { authActionTypes } from './types';

export const startLogin = () => {
    return {
        type: authActionTypes.START_LOGIN
    };
};

export const startLogout = () => {
    return {
        type: authActionTypes.START_LOGOUT
    };
};


export const loggedIn = () => {
    return {
        type: authActionTypes.LOGGED_IN
    };
};

export const loggedOut = () => {
    return {
        type: authActionTypes.LOGGED_OUT
    };
};