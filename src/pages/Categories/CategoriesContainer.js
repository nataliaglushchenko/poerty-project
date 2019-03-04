import { connect } from 'react-redux';

import Categories from './Categories';

const mapStateToProps = (state) => {
    return {
        categories: state.categories.categories
    }
}

export default connect(mapStateToProps, null)(Categories);
