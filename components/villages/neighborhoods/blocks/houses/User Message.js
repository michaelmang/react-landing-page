import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyA1JBmMSIg7X_lSEHr3vh7sEc_p83hB4g4",
    authDomain: "chat-bot-demo.firebaseapp.com",
    databaseURL: "https://chat-bot-demo.firebaseio.com",
    projectId: "chat-bot-demo",
    storageBucket: "chat-bot-demo.appspot.com",
    messagingSenderId: "740047634033"
  };

firebase.initializeApp(config);

const database = firebase.database();
const user = database.ref('user');

class UserMessage extends React.Component {
  constructor(){
    super()
    this.state = {avatar: "", username: "", message: "", showComponent: false}
  }

  componentDidMount() {
    let firebaseAvatar;
    let firebaseUsername;
    let firebaseMessage;

    let promise1 = new Promise((resolve, reject) => {
      user.on('value', function(snapshot) {
        firebaseAvatar = snapshot.val().avatar;
        resolve(firebaseAvatar);
      });
    });

    let promise2 = new Promise((resolve, reject) => {
      user.on('value', function(snapshot) {
        firebaseUsername = snapshot.val().username;
        resolve(firebaseUsername);
      });
    });

    let promise3 = new Promise((resolve, reject) => {
      user.on('value', function(snapshot) {
        firebaseMessage = snapshot.val().message;
        resolve(firebaseMessage);
      });
    });

    Promise.all([promise1, promise2, promise3]).then(values => {
      this.setState({avatar: values[0], username: values[1], message: values[2]})
      console.log(values);
    });

    setTimeout(() => {
      this.setState({showComponent: true});
    }, 3000)

  }

  render() {
    const showComponent = this.state.showComponent;
    return (
      <div>
        {showComponent ? (
          //render component
          <div className="user-message">
            <div style={{background: this.state.avatar}} className="user-avatar"></div>
            <div className="username">{this.state.username}</div>
            <div className="message">{this.state.message}</div>
          </div>
        ) : (
          //render nothing
          <div></div>
        )}
      </div>
    )
  }
}

module.exports = UserMessage;
