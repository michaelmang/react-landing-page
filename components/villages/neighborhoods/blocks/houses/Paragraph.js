import React from 'react';
import ReactDOM from 'react-dom';

class Paragraph extends React.Component {
  render() {
    return (
      <div>
        <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt urna quis neque feugiat mollis. Etiam fermentum quis mi vel facilisis. Donec in ornare massa.
        </p>
      </div>
    )
  }
}

module.exports = Paragraph;
