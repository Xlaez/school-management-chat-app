/* eslint-disable*/
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
// import { } from "react-icons";
export default function Logout() {
  const Navigate = useNavigate();
  const handleClick = async () => {
    localStorage.clear();
    Navigate("/login");
  };
  return <Button onClick={handleClick}>Logout</Button>;
}

const Button = styled.button`
  cursor: pointer;
  background: #9a86f3;
  padding: 5px 10px;
  border: 1px solid #9a86f3;
  border-radius: 5px;
  color: #ebe7ff;
`;
