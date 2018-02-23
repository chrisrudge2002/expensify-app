import { put, take, call } from 'redux-saga/effects';
import { authActionTypes } from '../actions/types';
import * as authActions from '../actions/auth';

import { logout } from '../firebase/auth';

export default function* logoutAsync() {
    while(true)
    {
        const action = yield take(authActionTypes.START_LOGOUT);
        const dbExpense = yield call(logout);
        yield put(authActions.loggedOut());
    }
}
