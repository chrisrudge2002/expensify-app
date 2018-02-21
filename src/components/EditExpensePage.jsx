import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import * as expenseActions from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };
    onRemove = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <h1>Edit Expense</h1>
                <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
                <button onClick={this.onRemove}>Remove</button>
            </div>
        );
    };
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find(e => e.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(expenseActions.startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(expenseActions.startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);