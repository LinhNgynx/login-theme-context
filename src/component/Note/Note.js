import React, { useState } from "react";
import "./Note.css";
import Element from "./Element";
function Note() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState({
    name: "",
    desc: "",
    category: "",
  });
  const [isEditing, setIsEditing] = useState([]);
  const handleCreate = (e) => {
    e.preventDefault();
    if (!input.name || !input.desc || !input.category) {
      alert("Please fill all fields");
      return;
    }
    const newNote = { ...input };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
    setInput({
      name: "",
      desc: "",
      category: "",
    });
    setIsEditing([...isEditing, false]);
  };
  const handleEdit = (idx) => {
    const newEditing = [...isEditing];
    newEditing[idx] = true;
    setIsEditing(newEditing);
  };
  const handleEditSave = (note, idx) => {
    const newNotes = [...notes];
    newNotes[idx] = note;
    setNotes(newNotes);
    const newEditing = [...isEditing];
    newEditing[idx] = false;
    setIsEditing(newEditing);
  };
  const handleDelete = (idx) => {
    const newNotes = notes.filter((_, i) => i !== idx);
    setNotes(newNotes);
    const newEditing = isEditing.filter((_, i) => i !== idx);
    setIsEditing(newEditing);
  };

  return (
    <div className="App">
      <div className="app-name">Note App</div>
      <form className="form-create" onSubmit={handleCreate}>
        <label htmlFor="note-name">Note Name</label>
        <input
          type="text"
          id="note-name"
          name="note-name"
          value={input.name}
          onChange={(e) => setInput({ ...input, name: e.target.value })}
        ></input>
        <label htmlFor="note-desc">Note Description</label>
        <input
          type="text"
          id="note-desc"
          name="note-desc"
          value={input.desc}
          onChange={(e) => setInput({ ...input, desc: e.target.value })}
        ></input>
        <label htmlFor="note-cate">Note Category</label>
        <input
          type="text"
          id="note-cate"
          name="note-cate"
          value={input.category}
          onChange={(e) => setInput({ ...input, category: e.target.value })}
        ></input>
        <input type="submit" value={"create"}></input>
      </form>
      <div className="elem-list">
        {notes.map((note, i) => (
          <Element
            id={i}
            key={`${note.name}-${i}`}
            category={note.category}
            name={note.name}
            desc={note.desc}
            isEditing={isEditing[i]}
            handleDelete={() => handleDelete(i)}
            handleEdit={() => handleEdit(i)}
            handleSaveEdit={handleEditSave}
          />
        ))}
      </div>
    </div>
  );
}

export default Note;
