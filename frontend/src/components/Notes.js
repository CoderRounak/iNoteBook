import React, { useContext , useEffect} from "react";
import NoteContext from "../context/notes/noteContext";
import { NoteItem } from "./NoteItem";

export const Notes = () => {
  const context_notes = useContext(NoteContext);
  const { notes, setNotes, fetchNotes } = context_notes;
  useEffect(() => {
    
    fetchNotes();
  
    
  }, [])
  
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
