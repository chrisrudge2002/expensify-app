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
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
                    <button 
                        className="button button--secondary" 
                        onClick={this.onRemove}>
                            Remove Expense
                    </button>
                </div>
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