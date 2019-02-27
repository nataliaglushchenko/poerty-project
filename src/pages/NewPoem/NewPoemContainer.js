import { connect } from 'react-redux';

import * as actions from '../../store/actions';

import NewPoem from './NewPoem';

const mapStateToProps = state => {
    return {
        isAuthorsLoaded: state.authors.isLoaded,
        authors: state.authors.authors,
        isCategoriesLoaded: state.categories.isLoaded,
        categories: state.categories.categories,
        isAuthenticated: state.auth.isAuthenticated,
        error: state.newPoem.error
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onSubmitNewPoem: (newPoem) => dispatch(actions.createNewPoem(newPoem)),
        onSubmitNewAuthor: (author) => dispatch(actions.addNewAuthor(author)),
        onSubmitNewCategory: (category) => dispatch(actions.addNewCategory(category)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPoem);