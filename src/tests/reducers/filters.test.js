import moment from 'moment';
import { filterActionTypes } from '../../actions/types';
import reducer from '../../reducers/filters';

test('should set default filter state', () => {
    const state = reducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sort by amount', () => {
    const state = reducer(undefined, { type: filterActionTypes.SORT_BY_AMOUNT });
    expect(state.sortBy).toBe('amount');
});

test('should set sory by date', () => {
    const currentState = { 
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const state = reducer(currentState, { type: filterActionTypes.SORT_BY_DATE });
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const text = 'This is my filter';
    const action = {
        type: filterActionTypes.SET_TEXT_FILTER,
        text 
    };
    const state = reducer(undefined, action);
    expect(state.text).toBe(text);
});

test('should end date filter', () => {
    const endDate = moment();
    const action = {
        type: filterActionTypes.SET_END_DATE,
        endDate 
    };
    const state = reducer(undefined, action);
    expect(state.endDate).toEqual(endDate);
});

test('should start date filter', () => {
    const startDate = moment();
    const action = {
        type: filterActionTypes.SET_START_DATE,
        startDate 
    };
    const state = reducer(undefined, action);
    expect(state.startDate).toEqual(startDate);
});