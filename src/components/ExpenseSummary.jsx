import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeraljs';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpenseSummary = ({ expenseCount, totalAmount }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedTotal = numeral(totalAmount / 100).format('$0,0.00') 
    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling {formattedTotal}</h1>
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        expenseCount: selectExpenses(state.expenses, state.filters).length,
        totalAmount: selectExpensesTotal(selectExpenses(state.expenses, state.filters))
    }
}

export default connect(mapStateToProps)(ExpenseSummary);