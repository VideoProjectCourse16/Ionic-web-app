import { Movie } from "./movies.model";

export interface Favorite {
    username: string;
    movieId: string;
    id:string;
}

export interface Favorites{
    message: string,
    favorites:Favorite[]
  }