import SearchBar from "./components/SearchBar";
import searchImages from "./api";

function App() {
  const handleSubmit = (term) => {
    console.log("Do a search with", term);
    searchImages(term);

  }
  return (
    <div className="App">
       <SearchBar onSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
