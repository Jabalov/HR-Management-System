import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// Importing the Components to be used in their respective routes
import HR from './components/hr.component';
import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">HR Database</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Departments</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create Department</Link>
                </li>

              </ul>
            </div>
          </nav> <br/>
          <Switch>
              <Route exact path='/' component={ HR } />
              <Route exact path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/index' component={ Index } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;