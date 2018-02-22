import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import * as filterActions from '../actions/filters';

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onCalendarFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onSortChange = (e) => {
        if (e.target.value === "date") {
            this.props.sortByDate();
        } else if (e.target.value === "amount") {
            this.props.sortByAmount();
        }
    };
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };
    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input 
                            className="text-input"
                            type="text" 
                            value={this.props.filters.text} 
                            onChange={this.onTextChange} placeholder="Search expenses"
                        />
                    </div>
                    <div className="input-group__item">
                        <select
                            className="select"
                            value={this.props.filters.sortBy} 
                            onChange={this.onSortChange}>
                                <option value="date">Date</option>
                                <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker
                        startDate={this.props.filters.startDate}
                        startDateId="startDate"
                        endDate={this.props.filters.endDate}
                        endDateId="endDate"
                        onDatesChange={this.onDatesChange}
                        focusedInput={this.state.calendarFocused}
                        onFocusChange={this.onCalendarFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={(day) => false}
                        displayFormat="DD MMM YYYY"
                        showClearDates={true}
                    />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setEndDate: (endDate) => dispatch(filterActions.setEndDate(endDate)),
    setStartDate: (startDate) => dispatch(filterActions.setStartDate(startDate)),
    setTextFilter: (text) => dispatch(filterActions.setTextFilter(text)),
    sortByAmount: () => dispatch(filterActions.sortByAmount()),
    sortByDate: () => dispatch(filterActions.sortByDate()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);