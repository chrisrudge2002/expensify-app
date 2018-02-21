import { put, take, call } from 'redux-saga/effects';
import { expenseActionTypes } from '../actions/types';
import * as expenseActions from '../actions/expenses';

import { editExpenseInDatabase } from '../firebase/expenses'

export default function* editExpenseAsync() {
    while(true)
    {
        const action = yield take(expenseActionTypes.START_EDIT_EXPENSE);
        yield call(editExpenseInDatabase, action.id, action.updates);
        yield put(expenseActions.editExpense(action.id, action.updates))
    }
}
