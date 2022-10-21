import React,{useState} from "react";
import NoteContext from "./noteContext";

const NoteState = (props) =>{
    const s={
        
    }
    const [state,setState]=useState(s)

    

    return(
        <NoteContext.Provider value={s}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;