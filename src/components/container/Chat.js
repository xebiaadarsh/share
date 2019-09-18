import React from "react";

import "./styles/style.css";
import user from '../../assets/images/user.png';

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      EnterText: null
    };
  }

  handleChange = event => {
    this.setState({ EnterText: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.getUserEntry({ data: { msg: this.state.EnterText } });
    this.sendMessage();
    event.target.reset();
  };

  scrollToBottom = () => {
    const chat = document.getElementById("chatList");
    chat.scrollTop = chat.scrollHeight;
  };

  sendMessage = () => {
    this.props.getChatData();
  };

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    return (
      <div className="app">
        <p>Chat Window</p>
        <div className="chatWindow">
          <ul className="chat" id="chatList">
            {this.props.chats.map((item, index) => (
              <div key={index}>
                {item.data.id === 1 ? (
                  <div>
                    <div className="image left"><img src={user}/></div>
                    <li className="other">
                      <div className="msg">
                        <div className="message"> {item.data.msg} </div>
                      </div>
                    </li>
                  </div>
                ) : (
                  <div >
                    <div className="image right"><img src={user}/></div>
                  <li className="self">
                    <div className="msg">
                      <div className="message"> {item.data.msg}</div>
                    </div>
                  </li>
                  </div>
                )}
              </div>
            ))}
          </ul>
          <div className="chatInputWrapper">
            <form onSubmit={this.handleSubmit}>
              <input
                className="textarea input"
                type="text"
                placeholder="Enter your message..."
                onChange={this.handleChange}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Chat;
