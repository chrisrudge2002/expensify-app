import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            calendarFocused: false,
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            description: props.expense ? props.expense.description : '',
            error: '',
            note: props.expense ? props.expense.note : ''
        };
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };
    onCalendarFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };  
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };    
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please provide description and amount.'}));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                description: this.state.description,
                note: this.state.note
            });
        }
    }
    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                { this.state.error && <p className="form__error">{this.state.error}</p> }
                <input 
                    className="text-input"
                    type="text"
                    placeholder="Description"
                    autoFocus={true}
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                />
                <input 
                    className="text-input"
                    type="text"
                    placeholder="Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                />
                <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onCalendarFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={(day) => false}
                    displayFormat="DD MMM YYYY"
                />
                <textarea 
                    className="textarea"
                    placeholder="Add a note for your expense (optional)"
                    value={this.state.note}
                    onChange={this.onNoteChange}>
                </textarea>
                <div>
                    <button className="button">Save Expense</button>
                </div>
            </form>
        )
    }
}

export default ExpenseForm;