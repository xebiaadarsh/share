export default function search(state = [], action){
    switch (action.type) {
        case 'GET_SEARCH_SUCCESS':
            return action.payload.data;
        default:
            return state;
    }
}