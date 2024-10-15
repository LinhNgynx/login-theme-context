import React, { useState } from "react";
import { useEffect } from "react";
import "./Element.css";
export default function Element({
  id,
  category,
  name,
  desc,
  handleEdit,
  handleDelete,
  isEditing,
  handleSaveEdit,
}) {
  const [input, setInput] = useState({
    name: "",
    desc: "",
    category: "",
  });
  useEffect(() => {
    if (isEditing) {
      setInput({ name, desc, category });
    }
  }, [isEditing, name, desc, category]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSaveEdit(input, id);
  };
  return (
    <>
      {isEditing ? (
        <>
          <form className="form-edit" onSubmit={handleSubmit}>
            <label htmlFor="note-name">Note Name:</label>
            <input
              type="text"
              id="note-name"
              name="note-name"
              value={input.name}
              onChange={(e) => setInput({ ...input, name: e.target.value })}
            ></input>
            <label for="note-desc">Note Description:</label>
            <input
              type="text"
              id="note-desc"
              name="note-desc"
              value={input.desc}
              onChange={(e) => setInput({ ...input, desc: e.target.value })}
            ></input>
            <label for="note-cate">Note Category:</label>
            <input
              type="text"
              id="note-cate"
              name="note-cate"
              value={input.category}
              onChange={(e) => setInput({ ...input, category: e.target.value })}
            ></input>
            <input type="submit" value="Save"></input>
          </form>
        </>
      ) : (
        <>
          <div className="Elem">
            <p>Category: {category}</p>
            <p>Name: {name}</p>
            <p>Description: {desc}</p>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </>
      )}
    </>
  );
}
