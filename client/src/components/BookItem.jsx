import { useState } from "react";

function BookItem({ book, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newStatus, setNewStatus] = useState(book.status);

  const handleSave = () => {
    onUpdate(book._id, { status: newStatus });
    setIsEditing(false);
  };

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "5px",
      }}
    >
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>
        Status:{" "}
        {isEditing ? (
          <select
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
          >
            <option value="available">Available</option>
            <option value="borrowed">Borrowed</option>
          </select>
        ) : (
          <strong>{book.status}</strong>
        )}
      </p>

      {isEditing ? (
        <>
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)} style={{ marginLeft: "5px" }}>
            Cancel
          </button>
        </>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}

      <button
        onClick={() => onDelete(book._id)}
        style={{ marginLeft: "10px", color: "red" }}
      >
        Delete
      </button>
    </div>
  );
}

export default BookItem;
