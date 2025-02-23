import React from "react";
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {fetchMovieDetails} from "../api/movies";
import Header from "../components/Header";

const MoviePage: React.FC = () => {
  const {id} = useParams<{id: string}>();

  const {data, error, isLoading} = useQuery({
    queryKey: ["movie", id],
    queryFn: () => fetchMovieDetails(id || ""),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading movie details</div>;

  return (
    data && (
      <>
        <Header />
        <div className="movie-details">
          <h1>{data.title}</h1>
          {data.posterUrl && <img src={data.posterUrl} alt={data.title} />}
          <p>{data.description}</p>
        </div>
      </>
    )
  );
};

export default MoviePage;
