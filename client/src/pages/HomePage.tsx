import MovieList from "../components/MovieList";
import Header from "../components/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="container">
        <h1>Movie List</h1>
        <MovieList />
      </div>
    </>
  );
}
