/* eslint-disable */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { allUsersRoute } from "../utils/ApiRoutes";
import Contact from "../Components/Chats/Contact";
import Welcome from "../Components/Chats/Welcome";
import ChatContainer from "../Components/Chats/ChatContainer";

function Chat() {
  const Navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(undefined);
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  useEffect(async () => {
    if (!localStorage.getItem("chat-user")) {
      Navigate("/login");
    } else {
      setCurrentUser(await JSON.parse(localStorage.getItem("chat-user")));
    }
  }, []);
  useEffect(async () => {
    if (currentUser) {
      if (!currentUser.isAvaterImage) {
        const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
        setContacts(data.data.data);
      } else {
        Navigate("/avater");
      }
    }
  }, [currentUser]);
  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };
  return (
    <Container>
      <div className="container">
        <Contact
          contacts={contacts}
          currentUser={currentUser}
          changeChat={handleChatChange}
        />
        {currentChat === undefined ? (
          <Welcome currentUser={currentUser} />
        ) : (
          <ChatContainer currentChat={currentChat} currentUser={currentUser} />
        )}
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background: #131324;
  .container {
    height: 85vh;
    width: 85vw;
    background: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;

    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-colums: 35% 65%;
    }
    @media screen and (min-width: 360px) and (max-width: 500px) {
      grid-template-colums: 45% 55%;
    }
  }
`;

export default Chat;
