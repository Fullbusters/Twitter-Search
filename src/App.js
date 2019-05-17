import React from 'react';
import './App.css';
import {  Route, Switch, Redirect } from 'react-router-dom';
import Content from './components/Content';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Content}/>
          <Route path='/search' component={Content}/>
          <Redirect to='/' />
        </Switch>
      </div>
    );
  }
}

export default App;
