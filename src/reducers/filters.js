import moment from 'moment';
import { filterActionTypes } from '../actions/types';

const defaultState = {
    text: '',
    sortBy: 'date', // date or amount
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case filterActionTypes.SET_TEXT_FILTER: 
            return {
                ...state,
                text: action.text
            };
        case filterActionTypes.SORT_BY_DATE: 
            return {
                ...state,
                sortBy: 'date'
            };
        case filterActionTypes.SORT_BY_AMOUNT: 
            return {
                ...state,
                sortBy: 'amount'
            };
        case filterActionTypes.SET_START_DATE: 
            return {
                ...state,
                startDate: action.startDate
            };
        case filterActionTypes.SET_END_DATE: 
            return {
                ...state,
                endDate: action.endDate
            };
        default: 
            return state;
    }
};