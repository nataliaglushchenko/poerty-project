import { connect } from 'react-redux';
import Poem from './Poem';

import * as actions from '../../store/actions/index';

const mapStateToProps = (state) => {
    return {
        poem: state.poems.poem,
        poemId: state.poems.poemId,
        poemIsLoaded: state.poems.poemIsLoaded,
        loading: state.poems.loading,
        isAuthenticated: state.auth.isAuthenticated
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onFetchPoem: (id) => dispatch(actions.fetchPoem(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Poem);