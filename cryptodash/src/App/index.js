import React, { Component } from 'react';
import './App.css';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import {AppProvider} from './AppProvider';
import Settings from '../Settings';
import Dashboard from '../Dashboard';
import Content from '../Shared/Content';
import Home from '../Home';

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <AppBar/>
          <Content>
            <Settings />
            <Dashboard />
            <Home />
          </Content>
        </AppProvider>
      </AppLayout>
    );
  }
}

export default App;
