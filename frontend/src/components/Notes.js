import React, { useContext } from "react";
import NoteContext from "../context/notes/noteContext";
import { NoteItem } from "./NoteItem";

export const Notes = () => {
  const context_notes = useContext(NoteContext);
  const { notes, setNotes } = context_notes;
  return (
    <>
      <h2 className="my-3">Your Notes</h2>
      <div className="notes row mb-4">
        {notes.map((note) => {
          return <NoteItem key={note._id} note={note}/>;
        })}
      </div>
    </>
  );
};
