import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/noteContext";
export const AddNote = () => {
  const { createNote } = useContext(NoteContext);
  const [note, setnote] = useState({title:"",description:"",tag:""})
  const handleClick=(e)=>{
    e.preventDefault();
    createNote(note.title,note.description,note.tag)
  }
  const onChange=(e)=>{
    setnote({...note,[e.target.name]:e.target.value})
  }
  return (
    <div>
      <h1>CREATE A NOTE</h1>

      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
          
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            onChange={onChange}
          />
        </div>

        {/* <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            onChange={onChange}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div> */}
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
};
