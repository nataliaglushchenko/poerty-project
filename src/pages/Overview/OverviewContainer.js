import { connect } from 'react-redux';

import * as actions from '../../store/actions/';
import Overview from './Overview';

const mapStateToProps = state => {
    return {
        overview: state.overview.overview,
        isOverviewLoaded: state.overview.isOverviewLoaded,
        overviewLoading: state.overview.overviewLoading,
        poemPreview: state.overview.poemPreview,
        isPoemPreviewLoaded: state.overview.isPoemPreviewLoaded
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onFetchCategoryOverview: (categorySlug) => dispatch(actions.fetchOverview(categorySlug)),
        onFetchPoemPreview: (poemId) => dispatch(actions.fetchPoemPreview(poemId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Overview);