import { useState } from "react";

function BookForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("available");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !author) return alert("Please fill all fields");

    const book = { title, author, status };

    const response = await fetch("http://localhost:5000/api/books", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(book),
    });

    const data = await response.json();
    console.log(data);

    onAdd(book);
    setTitle("");
    setAuthor("");
    setStatus("available");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <div>
        <label>Book Title: </label>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ marginRight: "10px" }}
        />
      </div>

      <div>
        <label>Author: </label>
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          style={{ marginRight: "10px" }}
        />
      </div>

      <div>
        <label>Status: </label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={{ marginRight: "10px" }}
        >
          <option value="available">Available</option>
          <option value="borrowed">Borrowed</option>
        </select>
      </div>

      <button type="submit">Add Book</button>
    </form>
  );
}

export default BookForm;
