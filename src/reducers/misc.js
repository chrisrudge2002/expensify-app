import { expenseActionTypes } from '../actions/types';

const defaultState = {
    expensesRetrieved: false
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case expenseActionTypes.GOT_EXPENSES: 
            return {
                ...state,
                expensesRetrieved: true
            };
        default: 
            return state;
    }
};

