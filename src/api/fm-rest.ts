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

let client = {
  getMovies,
};

export { client };
