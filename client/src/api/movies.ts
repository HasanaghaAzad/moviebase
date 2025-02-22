import {MovieDTO} from "../types/interfaces";
import {Movie, MovieList} from "../types/types";
import {transformMovieDTO, transformMoviesDTO} from "./transformers";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

export const fetchMovies = async (page: number): Promise<MovieList> => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }
  const data = await response.json();
  return transformMoviesDTO(data);
};

export const fetchMovieDetails = async (id: string): Promise<Movie> => {
  const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);
  if (!response.ok) {
    throw new Error("Failed to fetch movie details");
  }
  const movie: MovieDTO = await response.json();
  return transformMovieDTO(movie);
};
