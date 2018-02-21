import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import * as expenseActions from './actions/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './firebase/firebase';

const store = configureStore();

const app = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading ...</p>, document.getElementById('app'));
store.dispatch(expenseActions.getExpenses())

store.subscribe(() => {
    if(store.getState().misc.expensesRetrieved) {
        ReactDOM.render(app, document.getElementById('app'));
    }
});