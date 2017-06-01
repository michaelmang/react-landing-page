import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-grid-system';
import LandingPage from './components/villages/Landing Page.js';
import Demo from './components/villages/Demo.js';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/demo" component={Demo}/>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
