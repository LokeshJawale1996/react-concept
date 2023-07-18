import "./App.css";
import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from './components/BookList'
function App() {
  const [books, setBooks] = useState([]);

  const editBookById = (id,newTitle)=> {
    const updatedBooks = books.map((book) => {
      if(book.id===id){
        return {...book,title:newTitle};
      }
      return book;
    })
    setBooks(updatedBooks);
  }
  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    })
    setBooks(updatedBooks);
  }
  const createBook = (title) => {
    // books.push({id:123,title:title});
    console.log("Need to add book with:", title);
    const updatedBooks = [...books, { id: Math.round(Math.random() *9999), title }];
    setBooks(updatedBooks);
    console.log(books);
  };

  return (
    <div className="app">
      
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
