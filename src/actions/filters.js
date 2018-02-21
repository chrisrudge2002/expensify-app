import { filterActionTypes } from './types';

export const setTextFilter = (text = '') => {
    return {
        type: filterActionTypes.SET_TEXT_FILTER,
        text
    };
};

export const sortByDate = () => {
    return {
        type: filterActionTypes.SORT_BY_DATE
    };
};

export const sortByAmount = () => {
    return {
        type: filterActionTypes.SORT_BY_AMOUNT
    };
};

export const setStartDate = (startDate = undefined) => {
    return {
        type: filterActionTypes.SET_START_DATE,
        startDate
    };
};

export const setEndDate = (endDate = undefined) => {
    return {
        type: filterActionTypes.SET_END_DATE,
        endDate
    };
};
