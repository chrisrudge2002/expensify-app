import uuid from 'uuid';
import { expenseActionTypes } from './types';

export const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => {
    return {
        type: expenseActionTypes.ADD_EXPENSE,
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    };
};

export const editExpense = (id, updates = {}) => {
    return {
        type: expenseActionTypes.EDIT_EXPENSE,
        id,
        updates
    };
};

export const removeExpense = ({ id } = {}) => {
    return {
        type: expenseActionTypes.REMOVE_EXPENSE,
        id
    };
};