import React, { Component } from 'react';
import CocktailsContainer from './container/CocktailsContainer'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Navbar,Jumbotron} from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
          {/* <Router>
            <div>
              <span>
                <Link to="/">Home</Link>
              </span>
              <span>
                <Link to="/about">About</Link>
              </span>
              <span>
                <Link to="/topics">Topics</Link>
              </span>
            </div>
              <Route exact path="/" component={EditForm} />
              <Route path="/about" component={EditForm} />
              <Route path="/topics" component={EditForm} />
          </Router> */}
        </Navbar>
        <Jumbotron >
          <h1>Boozer App</h1>
        </Jumbotron>
        <CocktailsContainer />
      </div>
    );
  }
}

export default App;
