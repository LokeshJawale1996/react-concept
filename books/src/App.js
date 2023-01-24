import './App.css';
// import {useSate} from 'react'
import BookCreate from './components/BookCreate';
function App() {
  // const [books,setBooks] = useSate([]);
  const createBook = (title) => {
    // books.push({id:123,title:title});
   console.log("Need to add book with:" ,title);
  // setBooks(books);
  // console.log(books);
  }

  return (
    <div className="App">
      {/* {books.length} */}
    <BookCreate onCreate={createBook}/>
    </div>
  );
}

export default App;
