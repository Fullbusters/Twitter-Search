import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers/rootreducer';
import logger from 'redux-logger'
import { actionTypes } from 'redux-resource';
import { getStatus } from 'redux-resource';


export const store = createStore(
  rootReducer, 
  applyMiddleware(thunk, logger)
)

store.dispatch({
  type: actionTypes.READ_RESOURCES_PENDING,
  resourceType: 'books',
  resources: [24]
});

store.dispatch({
  type: actionTypes.READ_RESOURCES_SUCCEEDED,
  resourceType: 'books',
  resources: [{
    id: 24,
    title: 'My Name is Red',
    releaseYear: 1998,
    author: 'Orhan Pamuk'
  }]
});

const state = store.getState();
const readStatus = getStatus(store, 'books.meta[24].readStatus');

if(readStatus.pending) {
  console.log('the req')
} else if(readStatus.failed) {
  console.log('the')
} else if (readStatus.secceeded) {
  const book = state.books.resources[24];
  console.log(book)
}


