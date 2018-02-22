import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import authRootSaga from '../sagas/authRootSaga';
import expensesRootSaga from '../sagas/expensesRootSaga';
import authReducer from '../reducers/auth';
import expenseReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function *rootSaga() {
	yield all([
        authRootSaga(),
        expensesRootSaga(),
    ]);
}

export default () => {
    const reducer = combineReducers({
        auth: authReducer,
        expenses: expenseReducer,
        filters: filterReducer,
    });

    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
    sagaMiddleware.run(rootSaga);

    return store;
};