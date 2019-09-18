import { connect } from 'react-redux';


import Chat from './Chat';
import { getChatResponse,captureUserEntry } from './actions';


const mapStateToProps = (state) =>{
    return{
      chats: state.chats.chats || []
    }
}


const mapDispatchToProps = (dispatch) =>{
    return {
        getChatData: ()=> {
            dispatch(getChatResponse());
        },
        getUserEntry: (data)=>{
            dispatch(captureUserEntry(data))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Chat);