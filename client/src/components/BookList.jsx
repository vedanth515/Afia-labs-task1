import BookItem from "./BookItem";

function BookList({ books, onUpdate, onDelete }) {
  return (
    <div>
      <h2>All Books</h2>
      {books.length === 0 ? (
        <p>No books added yet.</p>
      ) : (
        books.map((book) => (
          <BookItem
            key={book._id}
            book={book}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}

export default BookList;
