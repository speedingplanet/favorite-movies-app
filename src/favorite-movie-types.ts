type ID = number;

interface HasId {
  id?: ID;
}

export interface Movie extends HasId {
  title: string;
  year: number;
  rating: number;
  comments?: Comment[];
}

export type ClientMovie = Omit<Movie, 'id'>;

export interface User extends HasId {
  userName: string;
  email: string;
  displayName: string;
  movies?: ID[];
  friends?: ID[];
}

export interface Comment extends HasId {
  userId: ID;
  movieId: ID;
  text: string;
}
