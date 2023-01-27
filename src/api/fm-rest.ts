import { User } from '../favorite-movie-types';

let url = 'https://favorite-movies-endpoint.azurewebsites.net';

async function getMovies() {
  try {
    let response = await fetch(`${url}/movies`);
    if (response.ok) {
      let movies = await response.json();
      return movies;
    } else {
      throw Error(`Bad HTTP response: ${response.status}`);
    }
  } catch (error) {
    console.error('fm-rest error:', error);
    throw error;
  }
}

async function getUsers() {
  try {
    let response = await fetch(`${url}/users`);
    if (response.ok) {
      let users = await response.json();
      return users;
    } else {
      throw Error(`Bad HTTP response: ${response.status}`);
    }
  } catch (error) {
    console.error('fm-rest (getUsers) error:', error);
    throw error;
  }
}

async function addUser(user: User) {
  try {
    let response = await fetch(`${url}/users`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (response.ok) {
      let updatedUser = await response.json();
      return updatedUser;
    } else {
      throw Error(`Bad HTTP response: ${response.status}`);
    }
  } catch (error) {
    console.error('fm-rest addUser() error:', error);
    throw error;
  }
}

let client = {
  getMovies,
  addUser,
  getUsers,
};

export { client };
