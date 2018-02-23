import { expenseActionTypes } from './types';

export const startAddExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => {
    return {
        type: expenseActionTypes.START_ADD_EXPENSE,
        expense: {
            description,
            note,
            amount,
            createdAt
        }
    };
};

export const startEditExpense = (id, updates = {}) => {
    return {
        type: expenseActionTypes.START_EDIT_EXPENSE,
        id,
        updates
    };
};

export const startRemoveExpense = ({ id } = {}) => {
    return {
        type: expenseActionTypes.START_REMOVE_EXPENSE,
        id
    };
};

export const addExpense = (expense) => {
    return {
        type: expenseActionTypes.ADD_EXPENSE,
        expense
    };
};

export const getExpenses = () => {
    return {
        type: expenseActionTypes.GET_EXPENSES
    }
};

export const gotExpenses = (expenseList) => {
    return {
        type: expenseActionTypes.GOT_EXPENSES,
        expenseList
    }
};

export const editExpense = (id, updates = {}) => {
    return {
        type: expenseActionTypes.EDIT_EXPENSE,
        id,
        updates
    };
};

export const removeExpense = (id) => {
    return {
        type: expenseActionTypes.REMOVE_EXPENSE,
        id
    };
};