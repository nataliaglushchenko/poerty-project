import { connect } from 'react-redux';

import Authors from './Authors';

const mapStateToProps = (state) => {
    return {
        authors: state.authors.authors
    }
}

export default connect(mapStateToProps, null)(Authors);
