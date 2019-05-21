import { ACTION_CHANGE_SEARCH_VALUE,LOAD_POST_SUCCESS } from '../actions/listactions';

export const rootReducer = (state, action) => {
    switch (action.type) {
        case ACTION_CHANGE_SEARCH_VALUE:
            return { ...state, text: action.payload}
        case LOAD_POST_SUCCESS:
            console.log('LOAD_POST_SUCCESS')
            return { ...state, posts: action.payload};
        default :
            return state;
    }
}




