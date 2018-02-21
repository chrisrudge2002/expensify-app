import React from 'react';
import { shallow }  from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';

test('should render ExpenseSummary correctly with no expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={0} totalAmount={0} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary correctly with one expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} totalAmount={4500} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary correctly with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={2} totalAmount={1234500} />);
    expect(wrapper).toMatchSnapshot();
});