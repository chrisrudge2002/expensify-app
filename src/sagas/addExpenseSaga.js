import { put, take, call } from 'redux-saga/effects';
import { expenseActionTypes } from '../actions/types';
import * as expenseActions from '../actions/expenses';

import { addExpenseToDatabase } from '../firebase/expenses'

export default function* addExpenseAsync() {
    while(true)
    {
        const action = yield take(expenseActionTypes.START_ADD_EXPENSE);
        var dbExpense = yield call(addExpenseToDatabase, action.expense);
        yield put(expenseActions.addExpense(dbExpense))
    }
}