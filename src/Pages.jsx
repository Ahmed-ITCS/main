import {BrowserRouter,Routes, Route } from "react-router-dom";
import React from 'react'
import App from './App'
import Home from "./Home";


export default function Pages() {
  return (
    <div>
        <Routes>
            <Route path ='/' element={<Home />}></Route>
            <Route path ='/addtask' element={<App />}></Route>
            
        </Routes>
    </div>
  )
}
