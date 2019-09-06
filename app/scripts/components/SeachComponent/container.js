import Search from './Search';
import { searchAction } from './action';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { 
        value : state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getSearchData: (value) => {
            dispatch(searchAction(value));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);