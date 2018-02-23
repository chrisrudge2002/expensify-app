import { put, take, call, select } from 'redux-saga/effects';
import { expenseActionTypes } from '../actions/types';
import * as expenseActions from '../actions/expenses';

import { addExpenseToDatabase } from '../firebase/expenses';

export default function* addExpenseAsync() {
    while(true)
    {
        const action = yield take(expenseActionTypes.START_ADD_EXPENSE);
        const userid = yield select(state => state.auth.userid);
        const dbExpense = yield call(addExpenseToDatabase, action.expense, userid);
        yield put(expenseActions.addExpense(dbExpense));
    }
}
