import { useEffect, useState } from "react";
import axios from "axios";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

const API_URL = "http://localhost:5000/api/books";

function App() {
  const [books, setBooks] = useState([]);

  // Fetch all books
  const fetchBooks = async () => {
    try {
      const res = await axios.get(API_URL);
      setBooks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Add book
  const addBook = async (book) => {
    try {
      const res = await axios.post(API_URL, book);
      setBooks([...books, res.data]);
    } catch (err) {
      console.error(err);
    }
  };

  // Update book
  const updateBook = async (id, updatedFields) => {
    try {
      const res = await axios.put(`${API_URL}/${id}`, updatedFields);
      setBooks(books.map(b => (b._id === id ? res.data : b)));
    } catch (err) {
      console.error(err);
    }
  };

  // Delete book
  const deleteBook = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setBooks(books.filter(b => b._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>📚 Book Sharing Tracker</h1>
      <BookForm onAdd={addBook} />
      <BookList books={books} onUpdate={updateBook} onDelete={deleteBook} />
    </div>
  );
}

export default App;
