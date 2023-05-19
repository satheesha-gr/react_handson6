import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import './CSS/navbar.css'

function NavBar() {
  return (
    <div>
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink className="links" to="/">
                    Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className="links" to="/students-data">
                    Students
                    </NavLink>
                </li>
                <li>
                    <NavLink className="links" to="/contact-us">
                    Contact Us
                    </NavLink>
                </li>
            </ul>
        </nav>

      <Outlet />
    </div>
  )
}

export default NavBar