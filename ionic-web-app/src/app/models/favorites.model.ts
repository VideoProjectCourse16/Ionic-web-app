import { Movie } from "./movies.model";

export interface Favorite {
    username: string;
    movieId: number;
}

export interface Favorites{
    message: string,
    favorites: Movie[]
  }