import moment from 'moment';
import * as filterActions from '../../actions/filters';
import { filterActionTypes } from '../../actions/types';

test('should generate set end date action', () => {
    const action = filterActions.setEndDate(moment(0));
    expect(action).toEqual({
        type: filterActionTypes.SET_END_DATE,
        endDate: moment(0)
    })
});

test('should generate set start date action', () => {
    const action = filterActions.setStartDate(moment(0));
    expect(action).toEqual({
        type: filterActionTypes.SET_START_DATE,
        startDate: moment(0)
    })
});

test('should generate set text filter action with provided value', () => {
    const text = 'Something in';
    const action = filterActions.setTextFilter(text);
    expect(action).toEqual({
        type: filterActionTypes.SET_TEXT_FILTER,
        text
    })
});

test('should generate set text filter action with default value', () => {
    const action = filterActions.setTextFilter();
    expect(action).toEqual({
        type: filterActionTypes.SET_TEXT_FILTER,
        text: ''
    })
});

test('should generate sort by amount action', () => {
    const action = filterActions.sortByAmount();
    expect(action).toEqual({
        type: filterActionTypes.SORT_BY_AMOUNT
    })
});

test('should generate sort by date action', () => {
    const action = filterActions.sortByDate();
    expect(action).toEqual({
        type: filterActionTypes.SORT_BY_DATE
    })
});
