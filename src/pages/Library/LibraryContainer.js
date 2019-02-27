import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import Library from './Library';

const mapStateToProps = state => {
    return {
        userData: state.auth.userData,
        isAuthenticated: state.auth.isAuthenticated
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetUserData: () => dispatch(actions.getUserData())
    }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Library);