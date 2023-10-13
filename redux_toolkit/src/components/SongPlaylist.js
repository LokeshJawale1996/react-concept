import { createRandomSong } from "../data";

function SongPlaylist() {
  // To Do:
  // Get list of songs
  const songPlaylist = [];

  const handleSongAdd = (song) => {
    // To Do:
    // Add song to list of songs
  };
  const handleSongRemove = (song) => {
    // To Do:
    // Remove song from list of songs
  };

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song}>
        {song}
        <button
          onClick={() => handleSongRemove(song)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div>
      <div className="flex justify-between flex-wrap m-5 gap-2">
        <h3 className="text-2xl font-semibold">Song Playlist</h3>
        <div>
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 border border-blue-700 rounded"
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
