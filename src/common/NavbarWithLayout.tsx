import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function NavbarWithLayout() {
  return (
    <>
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-lg bg-primary">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/movies"
                  className="nav-link">
                  Movies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/friends"
                  className="nav-link">
                  Friends
                </NavLink>
              </li>
            </ul>
          </nav>
          <hr />
        </div>
      </div>
      <Outlet />
    </>
  );
}
