import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/header';
import HomePage from './homePage';
import Paper from '@material-ui/core/Paper';

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Switch>    
          <Route exact={true} path='/' component={HomePage} />
          {/*<Route path='/submit' component={LessonsContainer} />*/}
        </Switch>
      </div>
    );
  };
}

export default (App);