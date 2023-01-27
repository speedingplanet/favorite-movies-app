import React, { useState } from 'react';
import MoviesManager from './movies/MoviesManager';
import FriendsManager from './friends/FriendsManager';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <main className="container">
      <div className="row">
        <header className="col">
          <h1>Favorite Movies App</h1>
        </header>
      </div>
      <div className="row">
        <div className="col-2">
          <ul>
            <li>
              <Link to="movies">Movies</Link>
            </li>
            <li>
              <Link to="friends">Friends</Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <Routes>
            <Route
              path="movies"
              element={<MoviesManager />}
            />
            <Route
              path="friends"
              element={<FriendsManager />}
            />
          </Routes>
        </div>
      </div>
    </main>
  );
}

export default App;
