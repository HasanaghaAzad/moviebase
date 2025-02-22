import {Link} from "react-router-dom";
import {Movie} from "../types/types";

export default function MovieItem({movie}: {movie: Movie}) {
  return (
    <div className="movie-item">
      <Link to={`/movie/${movie.id}`}>
        <img src={movie.posterUrl} alt={movie.title} />
        <h3>{movie.title}</h3>
      </Link>
    </div>
  );
}
