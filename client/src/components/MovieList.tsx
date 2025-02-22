import {useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {fetchMovies} from "../api/movies";
import MovieItem from "./MovieItem";
import Pagination from "./Pagination";
import {Movie} from "../types/types";

export default function MovieList() {
  const [page, setPage] = useState(1);
  const {data, error, isLoading} = useQuery({
    queryKey: ["movies", page],
    queryFn: () => fetchMovies(page),
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
