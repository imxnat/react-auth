import React from 'react'
import './App.css';
import Login from './components/Login/Login'
import NotAllowed from './components/NotAllowed/NotAllowed'
import { BrowserRouter as Router, Switch,  Route } from "react-router-dom";

function App() {
  return (

    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Not-allowed" component={NotAllowed} />       
        </Switch>
      </div>
      </Router>

  );
}

export default App;
