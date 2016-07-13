import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, Redirect, IndexRoute } from 'react-router';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './components/App';
import Dashboard from './components/dashboard/Dashboard';
import Chat from './components/chat/Chat';
import Resources from './components/resources/Resources';

// These should be in resources component??
import NewResource from './components/resources/NewResource';
import ShowResources from './components/resources/ShowResources';

 ReactDOM.render(
   <MuiThemeProvider>
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
  </MuiThemeProvider>
   , document.getElementById('react')
 );
