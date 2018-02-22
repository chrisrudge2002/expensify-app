import React from 'react';
import { connect } from 'react-redux';
import * as authActions from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div>
        <button onClick={startLogin}>Login</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(authActions.startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
