import './App.css';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import Welcome from './Components/Welcome'
import Surface from './Components/Surface';
import React, { Component } from 'react'
import Analyze from './Components/Analyze';

export class App extends Component {
  state = {
    infoTable: []
  }
  addObject = (item) =>{
      let {infoTable} = this.state;
      infoTable.push(item);
      this.setState({infoTable:infoTable});
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/Table">
              <Surface Items={this.state.infoTable} add={this.addObject} submit={this.submitData}/>
            </Route>
            <Route path="/Analyze">
              <Analyze Items={this.state.infoTable}/>
            </Route>
            <Route path="/">
              <Welcome/>
            </Route>
          </Switch>
      </Router>
    </div>
    )
  }
}

export default App
