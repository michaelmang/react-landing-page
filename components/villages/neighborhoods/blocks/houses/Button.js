import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  render() {
    return (
      <div>
        <button className="button">Add to Slack</button>
      </div>
    )
  }
}

module.exports = Button;
