import { put, take, call } from 'redux-saga/effects';
import { authActionTypes } from '../actions/types';
import * as authActions from '../actions/auth';

import { login } from '../firebase/auth'

export default function* loginAsync() {
    while(true)
    {
        const action = yield take(authActionTypes.START_LOGIN);
        var userid = yield call(login);
        yield put(authActions.loggedIn(userid));
    }
}
