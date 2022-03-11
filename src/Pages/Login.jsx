/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../public/assets/facebook.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { loginRoute, registerRoute } from "../utils/ApiRoutes";

function Register() {
  const Navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const toastDec = {
    position: "bottom-right",
    draggable: true,
    pauseOnHover: true,
    autoClose: 800,
    theme: "dark",
  };

  // useEffect(() => {
  //   if (localStorage.getItem("chat-user")) {
  //     Navigate("/");
  //   }
  // }, []);

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    const { password, username } = inputs;
    if (password.length <= 6) {
      toast.error("password cannot be less than 7 characters", toastDec);
      return false;
    } else if (username.length < 2) {
      toast.error("Username can not be less than two characters.", toastDec);
      return false;
    } else {
      return true;
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { username, password } = inputs;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });
      console.log(data);
      if (data.status === false) {
        toast.error(data.message, toastDec);
      }
      if (data.status === true) {
        localStorage.setItem("chat-user", JSON.stringify(data.data));
      }
      Navigate("/");
    }
  };

  return (
    <FormContainer>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="brand">
          <img src={Logo} alt="Logo" />
          <h1>TOF messenger</h1>
        </div>
        <input
          type="text"
          name="username"
          id=""
          placeholder="Username"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="password"
          id=""
          placeholder="Password"
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">SignIn</button>
        <span>
          Don't have an account ? <Link to="/signup">Signin</Link>
          {""}
        </span>
      </form>
      <ToastContainer />
    </FormContainer>
  );
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background: #131324;

  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: #ffffff;
      text-transform: uppercase;
    }
  }
    form{
      display:flex;
      flex-direction:column;
      gap:2rem;
      background:#00000076;
      border-radius:2rem;
      padding:2rem 5rem;
      input{
        background:transparent;
        padding:1rem;
        border:1px solid #4e0eff;
        border-radius:0.4rem;
        color:#ffffff;
        width:100%;
        font-size:1rem;
        
        &:focus{
          border:1px solid #997af0;
          outline:none;
        }
      }
      button{
        background:#997af0;
        color:#fff;
        padding:1rem 2rem;
        border:none;
        font-weight:bold;
        cursor:pointer;
        border-radius:0.4rem;
        font-size:1rem;
        text-transform:uppercase;
        transition:0.5s ease-in;
        &:hover{
          background:#4e0eff;
        }
      }
      span{
        color:#ffffff;
        text-transform:uppercase;
        text-align:center;
        a{
          color:#4e0eff;
          text-decoration:none;
          font-weight:bolder;
        }
      }

`;

export default Register;
