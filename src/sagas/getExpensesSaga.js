import { put, take, call, select } from 'redux-saga/effects';
import { expenseActionTypes } from '../actions/types';
import * as expenseActions from '../actions/expenses';

import { getExpensesFromDatabase } from '../firebase/expenses'

export default function* getExpensesAsync() {
    while(true)
    {
        const action = yield take(expenseActionTypes.GET_EXPENSES);
        const userid = yield select(state => state.auth.userid);
        var dbExpenseList = yield call(getExpensesFromDatabase, userid);
        yield put(expenseActions.gotExpenses(dbExpenseList))
    }
}
