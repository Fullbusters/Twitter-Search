import React from 'react';
import './App.css';
import {  Route, Switch, Redirect } from 'react-router-dom';
import PageSearch from './components/search-tweets/PageSearch';
import PagePost from './components/myposts/PagePost'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={PageSearch}/>
          <Route path='/search' component={PageSearch}/>
          <Route path= '/posts' component={PagePost}/>
          <Redirect to='/' />
        </Switch>
      </div>
    );
  }
}

export default App;
