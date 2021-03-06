import * as expenseActions from '../../actions/expenses';
import { expenseActionTypes } from '../../actions/types';
import expenses from '../fixtures/expenses';

test('should generate add expense action with provided values', () => {
    const action = expenseActions.addExpense(expenses[2]);
    expect(action).toEqual({
        type: expenseActionTypes.ADD_EXPENSE,
        expense: expenses[2]
    })
});

test('should add expense to database and store', () => {

})

test('should add expense with defaults to database and store', () => {

})

// test('should generate add expense action with default values', () => {
//     const action = expenseActions.addExpense();
//     expect(action).toEqual({
//         type: expenseActionTypes.ADD_EXPENSE,
//         expense: {
//             id: expect.any(String),
//             description: '',
//             amount: 0,
//             createdAt: 0,
//             note: ''
//         }
//     })
// });

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
    const id = '123abc';
    const action = expenseActions.removeExpense(id);
    expect(action).toEqual({
        type: expenseActionTypes.REMOVE_EXPENSE,
        id
    })
});

test('should generate get expenses action', () => {
    const action = expenseActions.getExpenses();
    expect(action).toEqual({
        type: expenseActionTypes.GET_EXPENSES
    })
});

test('should generate got expenses action', () => {
    const action = expenseActions.gotExpenses(expenses);
    expect(action).toEqual({
        type: expenseActionTypes.GOT_EXPENSES,
        expenseList: expenses
    })
});