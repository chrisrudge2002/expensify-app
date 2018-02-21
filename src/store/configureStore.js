import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import expensesRootSaga from '../sagas/expensesRootSaga';
import expenseReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';
import miscReducer from '../reducers/misc';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function *rootSaga() {
	yield all([
        expensesRootSaga()
    ]);
}

export default () => {
    const reducer = combineReducers({
        expenses: expenseReducer,
        filters: filterReducer,
        misc: miscReducer
    });

    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
    sagaMiddleware.run(rootSaga);

    return store;
};