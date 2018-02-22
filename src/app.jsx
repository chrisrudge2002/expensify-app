import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import LoadingPage from './components/LoadingPage';
import * as authActions from './actions/auth';
import * as expenseActions from './actions/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { firebase } from './firebase/firebase';

const store = configureStore();

store.subscribe(() => {
    if(store.getState().auth.expensesRetrieved) {
        renderApp();
        if (history.location.pathname === '/') {
            history.push('/dashboard');
        }
    }
});

const app = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;

const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(app, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    console.log(user.uid);
    if (user) {
        store.dispatch(authActions.loggedIn(user.uid))
        store.dispatch(expenseActions.getExpenses())
    } else {
        store.dispatch(authActions.loggedOut())
        renderApp();
        history.push('/');
    }
})