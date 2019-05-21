import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers/rootreducer';  
 

const initialState = {text: 'nasa', posts: ''};
// const middleware = routerMiddleware(browserHistory)
export const store = createStore(
    rootReducer, initialState,
    applyMiddleware(thunk)
)