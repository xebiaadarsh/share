import Search from './Search';
import {searchItemActionCreator } from './action';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    console.log("state", state)
    return { 
        item: state.item
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getSearchValue: (params) => {
            dispatch(searchItemActionCreator(params));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);