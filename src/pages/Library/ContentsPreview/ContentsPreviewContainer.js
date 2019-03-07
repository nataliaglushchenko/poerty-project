import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ContentsPreview from './ContentsPreview';

import * as actions from '../../../store/actions/';

const mapStateToProps = state => {    
    return {
        recommendedPoems: state.recommendedPoems.recommendedPoems,
        loading: state.recommendedPoems.loading,
        isRecommendedPoemsLoaded: state.recommendedPoems.isLoaded,
        error: state.recommendedPoems.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchRecommendedPoems: () => dispatch(actions.fetchRecommendedPoems())
    };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContentsPreview));
