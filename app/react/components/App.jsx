import React from 'react';
import { Link, Navigation } from 'react-router';
import AppBar from 'material-ui/AppBar';
import { Tab, Tabs } from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <AppBar title="Open Study"></AppBar>
          <Tabs>
            <Tab
              label="DASHBOARD"
              containerElement={<Link to="/" />}
            />
            <Tab
              label="CHAT"
              containerElement={<Link to="chat"/>}
            />
            <Tab
              label="RESOURCES"
              containerElement={<Link to="resources" />}
            />

          </Tabs>
        {this.props.children}
      </div>
    )
  }
}
