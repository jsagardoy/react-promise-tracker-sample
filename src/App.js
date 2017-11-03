import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { OrganizationContainer } from './pods/organization/container'
import {LoadingSpinnerComponent} from './pods/common/loadingSpinner';


class App extends Component {

  constructor(props) {
    super(props);  
  }

   render() {
    return (
      <div className="App">
        <OrganizationContainer/>
        <LoadingSpinnerComponent/>
      </div>
    );
  }
}

export default App;
