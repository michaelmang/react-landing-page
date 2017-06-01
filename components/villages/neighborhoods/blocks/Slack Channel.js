import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import UserMessage from './houses/User Message.js';
import ChatBotMessage from './houses/Chat Bot Message.js';

class SlackChannel extends React.Component {
  render() {
    //Boolean flag passed down for deciding what to render
    const messages = this.props.messages;
    return (
      <Col lg={12}>
        <img className="slack-channel" src="./images/Slack Channel.svg"/>
        {messages ? (
          //render messages is true (demo)
          <div>
            <UserMessage/>
            <ChatBotMessage/>
          </div>
        ) : (
          //render nothing messages is false (landing page)
          <div></div>
        )}
      </Col>
    )
  }
}

module.exports = SlackChannel;
