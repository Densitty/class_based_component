import React from "react";

export default function Button({ handleDelete }) {
  return (
    <button
      type="button"
      onClick={handleDelete}
      style={{
        backgroundColor: "red",
        color: "white",
        fontSize: "1rem",
        padding: "0.8rem 0.5rem",
        border: "none",
        cursor: "pointer",
      }}
    >
      delete me
    </button>
  );
}
