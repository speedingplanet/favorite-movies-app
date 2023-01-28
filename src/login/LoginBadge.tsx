import React, { MouseEventHandler } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { logout } from './users-slice';

export default function LoginBadge() {
  let loggedInUser = useAppSelector((state) => state.users.loggedInUser);
  let dispatch = useAppDispatch();
  const handleLogout: MouseEventHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="navbar-text">
      {loggedInUser ? (
        <span>
          Logged in as {loggedInUser.email}
          <button
            className="btn btn-info btn-sm"
            onClick={handleLogout}>
            Log out?
          </button>
        </span>
      ) : (
        ''
      )}
    </div>
  );
}
