import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import LoginBadge from '../login/LoginBadge';

export default function NavbarWithLayout() {
  return (
    <>
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-lg bg-primary d-flex justify-content-between">
            <div>
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
                <li className="nav-item">
                  <NavLink
                    to="/login"
                    className="nav-link">
                    Log in
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="me-3 text-light">
              <LoginBadge />
            </div>
          </nav>
          <hr />
        </div>
      </div>
      <Outlet />
    </>
  );
}
