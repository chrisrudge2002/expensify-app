import { put, take, call } from 'redux-saga/effects';
import { expenseActionTypes } from '../actions/types';
import * as expenseActions from '../actions/expenses';

import { getExpensesFromDatabase } from '../firebase/expenses'

export default function* getExpensesAsync() {
    while(true)
    {
        const action = yield take(expenseActionTypes.GET_EXPENSES);
        var dbExpenseList = yield call(getExpensesFromDatabase);
        yield put(expenseActions.gotExpenses(dbExpenseList))
    }
}
