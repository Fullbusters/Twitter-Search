import {postReducer}  from './postreducer';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { resourceReducer } from 'redux-resource';


const rootReducers = {
  postReducer,
  form: formReducer,
  books: resourceReducer('books')
}

export const rootReducer = combineReducers(rootReducers);



