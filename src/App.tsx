import React from 'react';
import MoviesManager from './movies/MoviesManager';
import FriendsManager from './friends/FriendsManager';
import { Route, Routes } from 'react-router-dom';
import NavbarWithLayout from './common/NavbarWithLayout';
import LoginManager from './login/LoginManager';

function App() {
  return (
    <main className="container">
      <div className="row">
        <header className="col">
          <h1>Favorite Movies App</h1>
        </header>
      </div>
      <Routes>
        <Route
          path="/"
          element={<NavbarWithLayout />}>
          <Route
            index
            element={<div>This is the default route</div>}
          />
          <Route
            path="friends"
            element={<FriendsManager />}
          />
          <Route
            path="movies"
            element={<MoviesManager />}
          />
          <Route
            path="login"
            element={<LoginManager />}
          />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
