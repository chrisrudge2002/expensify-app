import { put, take, call, select } from 'redux-saga/effects';
import { expenseActionTypes } from '../actions/types';
import * as expenseActions from '../actions/expenses';

import { editExpenseInDatabase } from '../firebase/expenses'

export default function* editExpenseAsync() {
    while(true)
    {
        const action = yield take(expenseActionTypes.START_EDIT_EXPENSE);
        const userid = yield select(state => state.auth.userid);
        yield call(editExpenseInDatabase, action.id, action.updates, userid);
        yield put(expenseActions.editExpense(action.id, action.updates))
    }
}
