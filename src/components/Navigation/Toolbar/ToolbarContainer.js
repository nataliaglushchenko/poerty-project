import { connect } from 'react-redux';

import { Toolbar } from './Toolbar';
import * as actions from '../../../store/actions';

const mapStateToProps = state => {
    return {
        userData: state.auth.userData,
        authentication: state.auth.authentication,
        isAuthenticated: state.auth.isAuthenticated,
        registrationErrorMessage: state.auth.registrationErrorMessage,
        loginErrorMessage: state.auth.loginErrorMessage,
        showAuthForm: state.auth.showAuthForm
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuthInit: () => dispatch(actions.authInit()),
        onAuthCancel: () => dispatch(actions.authCancel()),
        onAuth: (authData) => dispatch(actions.authentication(authData)),
        onRegistration: (regData) => dispatch(actions.registration(regData)),
        onLogout: () => dispatch(actions.logout()),
        onErrorReset: () => dispatch(actions.errorReset())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);