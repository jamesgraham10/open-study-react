import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, Redirect, IndexRoute } from 'react-router';

import App from './components/App';
import Dashboard from './components/dashboard/Dashboard';
import Chat from './components/chat/Chat';
import Resources from './components/resources/Resources';

// These should be in resources component??
import NewResource from './components/resources/NewResource';
import ShowResources from './components/resources/ShowResources';

 ReactDOM.render(
   <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="dashboard" component={Dashboard}/>
      <Route path="chat" component={Chat}/>
      <Route path="resources" component={Resources}>
        <IndexRoute component={ShowResources} />
        <Route path="new" component={NewResource} />
      </Route>
    </Route>
   </Router>
   , document.getElementById('react')
 );
