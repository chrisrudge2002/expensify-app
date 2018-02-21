import { expenseActionTypes } from '../actions/types';

const defaultState = [];

export default (state = defaultState, action) => {
    switch (action.type) {
        case expenseActionTypes.ADD_EXPENSE: 
            return [
                ...state,
                action.expense
            ];
        case expenseActionTypes.EDIT_EXPENSE: 
            return state.map(e => {
                if (e.id === action.id) {
                    return {
                        ...e,
                        ...action.updates
                    };
                }
                return e;
            });
        case expenseActionTypes.REMOVE_EXPENSE: 
            return state.filter(e => e.id !== action.id);
        default: 
            return state;
    }
};

