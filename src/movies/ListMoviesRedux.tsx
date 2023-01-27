import React from 'react';
import { useAppSelector } from '../app/hooks';
import ListMovies from './ListMovies';

export default function ListMoviesRedux() {
  let movies = useAppSelector((state) => state.movies.items);

  return <ListMovies movies={movies} />;
}
