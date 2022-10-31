import React, { useContext} from "react";
import NoteContext from "../context/notes/noteContext";

export const NoteItem = (props) => {
  
  const { deleteNote } = useContext(NoteContext);
  // const {note}=props;
  return (
    <div className='col-md-3 my-2'>
        <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">{props.note.title}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        {props.note.tag}
                      </h6>
                      <p className="card-text">{props.note.description}</p>
                      <i className="fa fa-lg fa-solid fa-trash" onClick={()=>{deleteNote(props.note._id)}}></i>
                      <i className="fa fa-lg fa-light fa-file-pen mx-2" onClick={()=>{props.updateNote(props.note)}}></i>
                    </div>
                  </div>
    </div>
  )
}
