import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../../../public/assets/facebook.png";
import { addMsg } from "../../utils/ApiRoutes";
import ChatInput from "./ChatInput";
import Logout from "./Logout";
import Messages from "./Messages";
export default function ChatContainer({ currentChat, currentUser }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  useEffect(() => {
    if (currentChat) {
      setCurrentUserName(currentChat.username);
    }
  }, [currentChat]);
  const handleSendMsg = async (msg) => {
    await axios.post(addMsg, {
      from: currentUser._id,
      to: currentChat._id,
      message: msg,
    });
  };
  return (
    <Container>
      <div className="chat-header">
        <div className="user-details">
          <div className="avater">
            <img src={logo} alt="" />
          </div>
          <div className="username">
            <h3>{currentUserName}</h3>
          </div>
        </div>
        <Logout />
      </div>
      <Messages />
      <ChatInput handleSendMsg={handleSendMsg} />
    </Container>
  );
}

const Container = styled.div`
  padding-top: 1rem;
  .chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    .user-details {
      display: flex;
      align-items: center;
      gap: 1rem;
      .avater {
        img {
          height: 3rem;
        }
      }
      .username {
        h3 {
          color: #fff;
        }
      }
    }
  }
`;
