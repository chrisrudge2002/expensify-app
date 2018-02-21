import * as expenseActions from '../../actions/expenses';
import { expenseActionTypes } from '../../actions/types';

test('should generate add expense action with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last months rent'
    };
    const action = expenseActions.addExpense(expenseData);
    expect(action).toEqual({
        type: expenseActionTypes.ADD_EXPENSE,
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('should generate add expense action with default values', () => {
    const action = expenseActions.addExpense();
    expect(action).toEqual({
        type: expenseActionTypes.ADD_EXPENSE,
        expense: {
            id: expect.any(String),
            description: '',
            amount: 0,
            createdAt: 0,
            note: ''
        }
    })
});

test('should generate edit expense action', () => {
    const action = expenseActions.editExpense('123abc', { 
        note: 'New note value' 
    });
    expect(action).toEqual({
        type: expenseActionTypes.EDIT_EXPENSE,
        id: '123abc',
        updates: {
            note: 'New note value'
        }
    })
});

test('should generate remove expense action', () => {
    const action = expenseActions.removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: expenseActionTypes.REMOVE_EXPENSE,
        id: '123abc'
    })
});
