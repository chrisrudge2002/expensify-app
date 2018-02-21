import moment from 'moment';
import { expenseActionTypes } from '../../actions/types';
import reducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default expense state', () => {
    const state = reducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should add expense', () => {
    const expense = {
        id: '109',
        description: 'Laptop',
        note: '',
        createdAt: 20000,
        amount: 29500
    };
    const action = {
        type: expenseActionTypes.ADD_EXPENSE,
        expense
    };
    const state = reducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit expense by id', () => {
    const amount = 122000;
    const action = {
        type: expenseActionTypes.EDIT_EXPENSE,
        id: expenses[1].id,
        updates: {
            amount
        } 
    };
    const state = reducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

test('should not edit expense if id not found', () => {
    const amount = 122000;
    const action = {
        type: expenseActionTypes.EDIT_EXPENSE,
        id: -1,
        updates: {
            amount
        } 
    };
    const state = reducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should remove expense by id', () => {
    const action = {
        type: expenseActionTypes.REMOVE_EXPENSE,
        id: expenses[1].id 
    };
    const state = reducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: expenseActionTypes.REMOVE_EXPENSE,
        id: '-1' 
    };
    const state = reducer(expenses, action);
    expect(state).toEqual(expenses);
});