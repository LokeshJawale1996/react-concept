import "./App.css"
import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";

export default function App() {
  const handleResetClick = () => {
    //
  };

  return (
    <div className="container mx-4">
      <button onClick={() => handleResetClick()} className="bg-red-400 hover:bg-red-500 text-white py-2 px-4 border border-red-500 rounded">
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}
