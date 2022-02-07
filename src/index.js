import React from 'react';
import ReactDOM from 'react-dom';
import CelebrityJokes from './components/CelebrityJokes';
import StartForm from './components/StartForm';
import Language from './components/Language';
import Main from './components/Main';
import { Router, Route, browserHistory } from 'react-router';
import { requireAuth } from './utils/AuthService';

const Root = () => {
  return (
    <div className="container">
      <Router history={browserHistory}>
        <Route path="/" component={StartForm}/>
        <Route path="/lang" component={Language} />
        <Route path="/main" component={Main} />
      </Router>
    </div>
  )
}


ReactDOM.render(<Root />, document.getElementById('root'));