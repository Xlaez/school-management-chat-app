/* eslint-disable*/
import React, { useState, useEffect } from "react";
import styled from "styled-components";
export default function Welcome({ currentUser }) {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    if (currentUser) {
      setUser(currentUser.username);
    }
  }, [currentUser]);
  return (
    <Container>
      <img
        src="https://media.giphy.com/media/I1yVRt6aBQMeVkSS6z/giphy.gif"
        alt="Dancing Robot"
      />
      <h1>
        Welcome, <span>{user} !</span>
      </h1>
      <h3>Select a chat to begin messaging</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #ffffff;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
`;
