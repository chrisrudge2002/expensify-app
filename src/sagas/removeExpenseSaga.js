import { put, take, call } from 'redux-saga/effects';
import { expenseActionTypes } from '../actions/types';
import * as expenseActions from '../actions/expenses';

import { removeExpenseFromDatabase } from '../firebase/expenses'

export default function* removeExpenseAsync() {
    while(true)
    {
        const action = yield take(expenseActionTypes.START_REMOVE_EXPENSE);
        yield call(removeExpenseFromDatabase, action.id);
        yield put(expenseActions.removeExpense(action.id))
    }
}
