import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-52 pl-2 md:pl-6 relative z-20">
        {movies.nowPlayingMovies && (
          <MovieList title={"Now playing"} movies={movies.nowPlayingMovies} />
        )}
        {movies.popularMovies && (
          <MovieList title={"Popular"} movies={movies.popularMovies} />
        )}
        {movies.topRatedMovies && (
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        )}
        {movies.upcomingMovies && (
          <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
        )}
      </div>
    </div>
  );
};
export default SecondaryContainer;
