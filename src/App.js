import React from 'react'
import './App.css';
import Login from './components/Login/Login'
import { BrowserRouter as Router, Switch,  Route, Link } from "react-router-dom";

function App() {
  return (

    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/ruta">
              <h1>HOLA ME CAMBIE DE RUTA</h1>
          </Route>
        </Switch>
      </div>
      </Router>

  );
}

export default App;
