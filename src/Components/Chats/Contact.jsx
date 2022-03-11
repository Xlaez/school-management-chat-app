/*eslint-disable */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../../../public/assets/facebook (1).png";

function Contact({ contacts, currentUser, changeChat }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);
  useEffect(() => {
    if (currentUser) {
      // setCurrentUserImage(currentUser.avaterImage);
      setCurrentUserName(currentUser.username);
    }
  }, [currentUser]);
  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };
  return (
    <div>
      {currentUserName && (
        <Container>
          <div className="brand">
            <img src={logo} alt="logo" />
            <h3>TOF messenger</h3>
          </div>
          <div className="contacts">
            {contacts.map((contact, index) => {
              return (
                <div
                  className={`contact ${
                    index === currentSelected ? "selected" : ""
                  }`}
                  key={index}
                  onClick={() => changeCurrentChat(index, contact)}
                >
                  <div className="avater">
                    <img src={logo} alt="" />
                  </div>
                  <div className="username">
                    <h3>{contact.username}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="current-user">
            <div className="avater">
              <img src={logo} alt="logo" />
            </div>
            <div className="username">
              <h2>{currentUserName}</h2>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-colums: 10% 75% 15%;
  overflow: hidden;
  background: #080420;

  .brand {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    img {
      height: 2rem;
    }
    h3 {
      color: #ffffff;
      padding: 2rem 1rem;
      text-transform: uppercase;
    }
  }
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    padding-bottom: 2rem;
    gap: 0.8rem;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .contact {
      background: #ffffff39;
      min-height: 5rem;
      width: 90%;
      cursore: pointer;
      border-radius: 0.2rem;
      padding: 0.4rem;
      margin-bottom: 0.3rem;
      gap: 1rem;
      align-items: center;
      display: flex;
      transition: 0.5s ease-in-out;
      &:hover {
        background: #ffffff20;
        cursor: pointer;
      }
      .avater {
        img {
          height: 3rem;
        }
      }
      .username {
        h3 {
          color: #ffffff;
        }
      }
    }
    .selected {
      background: #98186f3;
    }
  }
  .current-user {
    background: #0d0d30;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 1rem 0;
    .avater {
      img {
        height: 3rem;
        max-line-size: 100%;
      }
    }
    .username {
      color: #ffffff;
    }
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      gap: 0.5rem;
      .username {
        h2 {
          font-size: 1rem;
        }
      }
    }
    @media screen and (min-width: 360px) and (max-width: 500px) {
      gap: 0.3rem;
      .username {
        h2 {
          font-size: 0.8rem;
          color: #ccc;
        }
      }
    }
  }
`;

export default Contact;
