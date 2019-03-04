import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { NavigationItems } from './NavigationItems';

import * as actions from '../../../store/actions/';

const mapStateToProps = state => {
    return {
        categories: state.categories.categories,
        isCategoriesLoaded: state.categories.isLoaded,
        authors: state.authors.authors,
        isAuthorsLoaded: state.authors.isLoaded
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchCategories: () => dispatch(actions.fetchCategories()),
        onFetchAuthors: () => dispatch(actions.fetchAuthors())
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavigationItems));