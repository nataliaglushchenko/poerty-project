import { connect } from 'react-redux';

import { Toolbar } from './Toolbar';
import * as actions from '../../../store/actions';

const mapStateToProps = state => {
    return {
        userData: state.auth.userData,
        authentication: state.auth.authentication,
        isAuthenticated: state.auth.isAuthenticated,
        errorMessage: state.auth.errorMessage,
        showAuthForm: state.auth.showAuthForm
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuthInit: () => dispatch(actions.authInit()),
        onAuthCancel: () => dispatch(actions.authCancel()),
        onAuth: (authData) => dispatch(actions.authentication(authData)),
        onRegistration: (regData) => dispatch(actions.registration(regData)),
        onLogout: () => dispatch(actions.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);