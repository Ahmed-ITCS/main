import React from 'react'
import './nav.css';
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
  <link
    href="https://fonts.googleapis.com/css2?family=Oswald&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
    rel="stylesheet"
  />
  <input type="checkbox" id="active" />
  <label htmlFor="active" className="menu-btn">
    <span />
  </label>
  <label htmlFor="active" className="close" />
  <div className="wrapper">
    <ul>
      <li>
      <NavLink to ="/">Home</NavLink>
      </li>
      <li>
      <NavLink to ="/addtask">Add task</NavLink>
      </li>
    </ul>
  </div>
  <div className="content">
    
  </div>
</>

  )
}
