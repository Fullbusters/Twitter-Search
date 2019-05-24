import { ACTION_CHANGE_SEARCH_VALUE, LOAD_TWEET_SUCCESS, ACTION_SAVE_POST } from './listactions';
import { fetchGet } from '../url/url';

export const changeSearchValue = (query) => {
    return {
        type: ACTION_CHANGE_SEARCH_VALUE,
        payload: query
    };
};
    
export const loadPost = (query) => {
    return {
        type: LOAD_TWEET_SUCCESS,
        payload: query,
    };
};

export const actionSavePost = (query) => {
    return {
        type: ACTION_SAVE_POST,
        payload: query
    };
};

// const changeURL = (query) => (dispatch) =>{
//     const searchString = qs.stringify({q: query});
//     return dispatch(push({ pathname: '/search', search: searchString }))
// }

export const searchTweets  = (query) => (dispatch) => {
    return fetchGet('/api/twitter/search?q=',query)
    .then(res => res.json())
    .then( 
        (result) => {
            // dispatch(changeURL(query))
            dispatch(loadPost(result.statuses))
        }
    )
}
