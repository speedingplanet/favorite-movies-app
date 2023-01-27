import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import NewUserForm from './NewUserForm';
import ReturningUserForm from './ReturningUserForm';

export default function LoginManager() {
  return (
    <>
      <div className="row">
        <div className="col">
          <p>
            Are you a <Link to="new-user">new</Link> or{' '}
            <Link to="returning-user">returning</Link> user?
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Routes>
            <Route
              path="new-user"
              element={<NewUserForm />}
            />
            <Route
              path="returning-user"
              element={<ReturningUserForm />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}
