import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import './firebase/firebase';

import * as expenseActions from './actions/expenses';
import * as filterActions from './actions/filters';

const store = configureStore();

const expOne = store.dispatch(expenseActions.addExpense({ description: 'Water bill', amount: 4500 }));
const expTwo = store.dispatch(expenseActions.addExpense({ description: 'Gas bill', createdAt: 1000}));
const expThree = store.dispatch(expenseActions.addExpense({ description: 'Rent', amount: 109500 }));

const app = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(app, document.getElementById('app'));