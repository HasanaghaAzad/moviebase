import {MovieDTO, MovieListDTO} from "../types/interfaces";
import {Movie, MovieList} from "../types/types";
const POSTERS_BASE_URL = import.meta.env.VITE_TMDB_POSTER_URL;

export const transformMovieDTO = (movieDTO: MovieDTO): Movie => {
  return {
    id: movieDTO.id,
    title: movieDTO.title,
    posterUrl: movieDTO.poster_path && `${POSTERS_BASE_URL}${movieDTO.poster_path}`,
    description: movieDTO.overview,
  };
};

export const transformMoviesDTO = (moviesListDTO: MovieListDTO): MovieList => {
  return {
    page: moviesListDTO.page,
    movies: moviesListDTO.results.map(transformMovieDTO),
    totalPages: moviesListDTO.total_pages,
    totalResults: moviesListDTO.total_results,
  };
};
