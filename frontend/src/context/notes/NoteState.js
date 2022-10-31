import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const initial_notes = [];
  const [notes, setNotes] = useState(initial_notes);

  const fetchNotes = async () => {
    // API CALL
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0MjY2MzUzMjEwMzEzMjQwYjNkMTE1In0sImlhdCI6MTY2NTMyNTE2MH0.lRh1wtC2EMNw_Xj1R3sbwYWxN2Hz6Xr_PL08sxQiYMU",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };
  const createNote = async (title, description, tag) => {
    // API CALL
    const response = await fetch(`${host}/api/notes/createnote/`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0MjY2MzUzMjEwMzEzMjQwYjNkMTE1In0sImlhdCI6MTY2NTMyNTE2MH0.lRh1wtC2EMNw_Xj1R3sbwYWxN2Hz6Xr_PL08sxQiYMU",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();

    // client-part addition
    const note = {
      _id: json._id,
      user: json.user,
      title: title,
      description: description,
      tag: tag,
      date: json.date,
      __v: json.__v,
    };

    setNotes(notes.concat(note));
  };
  const editNote = async (id, title, description, tag) => {
    // API CALL
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0MjY2MzUzMjEwMzEzMjQwYjNkMTE1In0sImlhdCI6MTY2NTMyNTE2MH0.lRh1wtC2EMNw_Xj1R3sbwYWxN2Hz6Xr_PL08sxQiYMU",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element.id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  const deleteNote = async (id) => {
    // API CALL
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0MjY2MzUzMjEwMzEzMjQwYjNkMTE1In0sImlhdCI6MTY2NTMyNTE2MH0.lRh1wtC2EMNw_Xj1R3sbwYWxN2Hz6Xr_PL08sxQiYMU",
      },
    });
    const json = await response.json();

    console.log("deleting" + id);
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };

  return (
    <NoteContext.Provider
      value={{ notes, createNote, deleteNote, editNote, setNotes, fetchNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
