import React from 'react';
import FMAGrid, { FMAGridColumnConfig } from '../common/grid/FMAGrid';
import { Movie } from '../favorite-movie-types';

interface ListMoviesProps {
  movies: Movie[];
}

export default function ListMovies({ movies }: ListMoviesProps) {
  let movieColumns: FMAGridColumnConfig<Movie>[] = [
    {
      field: 'title',
      label: 'Title',
    },
    {
      field: 'year',
      label: 'Year',
    },
    {
      field: 'rating',
      label: 'Rating',
    },
  ];
  return (
    <FMAGrid
      columns={movieColumns}
      records={movies}
    />
  );
}
