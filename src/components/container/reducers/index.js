import { GET_CHAT_RESPONSE_SUCCESS,USER_ENTRY } from "../actions/types";

export function chatReducer(state = { chats: [] }, actions) {
  switch (actions.type) {
    case GET_CHAT_RESPONSE_SUCCESS:
      return {
        ...state,
        chats: [...state.chats, actions.payload.data]
      };
    case USER_ENTRY:
      return {
        ...state,
        chats: [...state.chats, actions.payload.data]
      };
    default:
      return state;
  }
}
