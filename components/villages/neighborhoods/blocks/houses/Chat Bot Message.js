import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from "firebase";

const database = firebase.database();
const bot = database.ref('bot');

class ChatBotMessage extends React.Component {
  constructor(){
    super()
    this.state = {avatar: "", username: "", message: "", article: "", showComponent: false}
  }

  componentDidMount() {
    let firebaseAvatar;
    let firebaseUsername;
    let firebaseMessage;
    let firebaseArticle;

    let promise1 = new Promise((resolve, reject) => {
      bot.on('value', function(snapshot) {
        firebaseAvatar = snapshot.val().avatar;
        resolve(firebaseAvatar);
      });
    });

    let promise2 = new Promise((resolve, reject) => {
      bot.on('value', function(snapshot) {
        firebaseUsername = snapshot.val().username;
        resolve(firebaseUsername);
      });
    });

    let promise3 = new Promise((resolve, reject) => {
      bot.on('value', function(snapshot) {
        firebaseMessage = snapshot.val().message;
        resolve(firebaseMessage);
      });
    });

    let promise4 = new Promise((resolve, reject) => {
      bot.on('value', function(snapshot) {
        firebaseArticle = snapshot.val().article;
        resolve(firebaseArticle);
      });
    });

    Promise.all([promise1, promise2, promise3, promise4]).then(values => {
      this.setState({avatar: values[0], username: values[1], message: values[2], article: values[3]})
      console.log(values);
    });

    setTimeout(() => {
      this.setState({showComponent: true});
    }, 1500)
  }

  render() {
    const showComponent = this.state.showComponent;
    return (
      <div>
        {showComponent ? (
          //render component
          <div className="bot-message">
            <div style={{background: this.state.avatar}} className="bot-avatar"></div>
            <div className="username">{this.state.username}</div>
            <div className="message">{this.state.message}</div>
            <a href={this.state.article}>
              <span className="article">{this.state.article}</span>
            </a>
          </div>
        ) : (
          //render nothing
          <div></div>
        )}
      </div>
    )
  }
}

module.exports = ChatBotMessage;
