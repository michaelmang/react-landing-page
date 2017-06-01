import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import Laptop from './blocks/houses/Laptop.js';
import SectionDescription from './blocks/Section Description.js';

class SectionA extends React.Component {
  render() {
    return (
      <section className="section-a">
        <Container>
          <Row>
            <SectionDescription/>
            <Laptop/>
          </Row>
        </Container>
      </section>
    )
  }
}


module.exports = SectionA;
