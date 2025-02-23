import {useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {fetchMovies, searchMovies} from "../api/movies";
import MovieItem from "./MovieItem";
import Pagination from "./Pagination";
import {Movie} from "../types/types";
import {useLocation} from "react-router-dom";

const useQueryParams = () => {
  return new URLSearchParams(useLocation().search);
};

export default function MovieList() {
  const [page, setPage] = useState(1);
  const queryParams = useQueryParams();
  const query = queryParams.get("query");

  const {data, error, isLoading} = useQuery({
    queryKey: query ? ["searchMovies", query, page] : ["movies", page],
    queryFn: () => (query ? searchMovies(query, page) : fetchMovies(page)),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading movies</div>;

  return (
    <>
      <div className="movie-list">{data && data.movies.map((movie: Movie) => <MovieItem key={movie.id} movie={movie} />)}</div>
      <Pagination page={page} totalPages={data?.totalPages || 1} onPageChange={setPage} />
    </>
  );
}
