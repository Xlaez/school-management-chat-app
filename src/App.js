import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Chat from './Pages/Chat'
import Login from './Pages/Login'
import Register from './Pages/Register'
// import SetAvater from './Pages/SetAvater'


export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Chat />} />
      {/* <Route path='/avater' element={<SetAvater />} /> */}
    </Routes>
  </BrowserRouter>
}
