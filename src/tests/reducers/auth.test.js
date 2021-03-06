import { authActionTypes, expenseActionTypes } from '../../actions/types';
import reducer from '../../reducers/auth';

test('should set default auth state', () => {
    const state = reducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        expensesRetrieved: false,
        userid: ''
    });
});

test('should clear userid on logout', () => {
    const userid = '';
    const state = reducer({ userid: 'anything' }, { type: authActionTypes.LOGGED_OUT });
    expect(state.userid).toBe('');
});

test('should set userid on login', () => {
    const userid = 'abc123';
    const state = reducer(undefined, { type: authActionTypes.LOGGED_IN, userid });
    expect(state.userid).toBe(userid);
});

test('should set expensesRetrieved on data retrieval', () => {
    const state = reducer(undefined, { type: expenseActionTypes.GOT_EXPENSES });
    expect(state.expensesRetrieved).toBe(true);
});