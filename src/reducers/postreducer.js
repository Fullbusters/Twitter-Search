import { ACTION_CHANGE_SEARCH_VALUE,LOAD_TWEET_SUCCESS, ACTION_SAVE_POST } from '../actions/listactions';


const initialState = {
  myPosts: []
}

export const postReducer = (state = initialState , action) => {
  switch (action.type) {
    case ACTION_CHANGE_SEARCH_VALUE:
      return { ...state, text: action.payload};

    case LOAD_TWEET_SUCCESS:
      return { ...state, tweets: action.payload};

    case ACTION_SAVE_POST:
      return {  ...state, myPosts: [...state.myPosts, action.payload]}

    default :
      return state;
  }
};