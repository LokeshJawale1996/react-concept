import { createRandomMovie } from "../data";

function MoviePlaylist() {
  // To Do:
  // Get list of movies
  const moviePlaylist = [];

  const handleMovieAdd = (movie) => {
    // To Do:
    // Add movie to list of movies
  };
  const handleMovieRemove = (movie) => {
    // To Do:
    // Remove movie from list of movies
  };

  const renderedMovies = moviePlaylist.map((movie) => {
    return (
      <li key={movie}>
        {movie}
        <button
          onClick={() => handleMovieRemove(movie)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div>
      <div className="flex justify-between flex-wrap m-5">
        <h3 className="text-2xl font-semibold">Movie Playlist</h3>
        <div>
          <button
            onClick={() => handleMovieAdd(createRandomMovie())}
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 border border-blue-700 rounded"
          >
            + Add Movie to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default MoviePlaylist;
