import React from 'react';
import ReactDOM from 'react-dom';

class Subtitle extends React.Component {
  render() {
    return (
      <div>
        <h3 className="subtitle">{this.props.subtitle}</h3>
      </div>
    )
  }
}

module.exports = Subtitle;
