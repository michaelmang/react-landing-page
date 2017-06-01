import React from 'react';
import ReactDOM from 'react-dom';

class Title extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">{this.props.title}</h1>
      </div>
    )
  }
}

module.exports = Title;
