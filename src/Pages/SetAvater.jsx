// /* eslint-disable */
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import Logo from "../../public/assets/facebook.png";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
// import { setAvaterRoute, SetAvaterRoute } from "../utils/ApiRoutes";
// import { Buffer } from "buffer";

// function SetAvater() {
//   const api = "https://multiavater.com/45678945";
//   const Navigate = useNavigate();
//   const [avaters, setAvaters] = useState([]);
//   const [isLoading, setIsLoading] = useState([]);
//   const [selectedAvaters, setSelectedAvaters] = useState(undefined);
//   const toastDesc = {
//     position: "bottom-right",
//     autoClose: 8000,
//     pauseOnHover: true,
//     draggable: true,
//     theme: "dark",
//   };
//   const setProfilePicture = async () => {};
//   useEffect(async () => {
//     const data = [];
//     for (var i = 0; i < 4; i++) {
//       const image = await axios.get(
//         `${api}/${Math.round(Math.random() * 1000)}`
//       );
//       const buffer = new Buffer(image.data);
//       data.push(buffer.toString("base64"));
//     }
//     setAvaters(data);
//     setIsLoading(false);
//   }, []);
//   return (
//     <Container>
//       <div className="title-container">
//         <h1>Pick an avater as your profile picture</h1>
//       </div>
//       <div className="avaters">
//         {avaters.map((avater, index) => {
//           return (
//             <div
//               className={`avater ${
//                 selectedAvaters === index ? "selected" : ""
//               }`}
//               key={index}
//             >
//               <img
//                 src={`data:image/svg+xml;base64,${avater}`}
//                 alt="avater"
//                 onClick={() => {
//                   setSelectedAvaters(index);
//                 }}
//               />
//             </div>
//           );
//         })}
//       </div>
//       <ToastContainer />
//     </Container>
//   );
// }

// const Container = styled.div`
// display:flex;
// justify-content:center;
// align-items:center;
// flex-direction:column;
// background:#131324;
// gap:3rem;
// height:100vh;
// width:100vw;
// .loader{
//     max-inline-size:100%;
// }
// .title-container{
//     h1{
//         color:#ffffff
//     }
// }
// .avaters{
//     display:flex;
//     gap:2rem;

//     .avater{
//         border:0.4rem solid transparent;
//         padding:0.4rem;
//         border-radius:5rem;
//         display:flex;
//         justify-content:center;
//         align-items:center;
//         transition:0.5s ease-in;
//         img{
//             height:6rem;
//         }
//     }
//     .selected{
//         border:0.4rem solid #4e0eff
//     }
// }
// .submit-btn{

//         background:#997af0;
//         color:#fff;
//         padding:1rem 2rem;
//         border:none;
//         font-weight:bold;
//         cursor:pointer;
//         border-radius:0.4rem;
//         font-size:1rem;
//         text-transform:uppercase;
//         transition:0.5s ease-in;
//         &:hover{
//           background:#4e0eff;
// }
// `;

// export default SetAvater;
