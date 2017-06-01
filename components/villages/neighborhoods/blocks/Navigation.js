import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import Branding from './houses/Branding.js';
import DemoLink from './houses/Demo Link.js';

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <Col lg={6}>
          <Branding/>
        </Col>
        <Col lg={6}>
          <DemoLink/>
        </Col>
      </div>
    )
  }
}

module.exports = Navigation;
