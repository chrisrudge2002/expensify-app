import { put, take, call, select } from 'redux-saga/effects';
import { expenseActionTypes } from '../actions/types';
import * as expenseActions from '../actions/expenses';

import { removeExpenseFromDatabase } from '../firebase/expenses';

export default function* removeExpenseAsync() {
    while(true)
    {
        const action = yield take(expenseActionTypes.START_REMOVE_EXPENSE);
        const userid = yield select(state => state.auth.userid);
        yield call(removeExpenseFromDatabase, action.id, userid);
        yield put(expenseActions.removeExpense(action.id));
    }
}
