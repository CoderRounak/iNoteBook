import React,{useState} from "react";
import NoteContext from "./noteContext";

const NoteState = (props) =>{
    const initial_notes=[
        {
          "_id": "6343bc9676fe56c7fefed2c6",
          "user": "634266353210313240b3d115",
          "title": "TEST NOTE",
          "description": "test test test test",
          "tag": "personal",
          "date": "2022-10-10T06:32:54.936Z",
          "__v": 0
        },
        {
          "_id": "635526b2d5bff54f408834ea",
          "user": "634266353210313240b3d115",
          "title": "NOTE 1",
          "description": "dsvhdhwpighp weo w qhg qp; gqgqg k",
          "tag": "personal",
          "date": "2022-10-23T11:34:10.907Z",
          "__v": 0
        },
        {
          "_id": "635526bbd5bff54f408834ec",
          "user": "634266353210313240b3d115",
          "title": "NOTE 2",
          "description": "dsvhdhwpighp weo w qhg qp; gqgqg k",
          "tag": "personal",
          "date": "2022-10-23T11:34:19.706Z",
          "__v": 0
        },
        {
          "_id": "635526c1d5bff54f408834ee",
          "user": "634266353210313240b3d115",
          "title": "NOTE 3",
          "description": "dsvhdhwpighp weo w qhg qp; gqgqg k",
          "tag": "personal",
          "date": "2022-10-23T11:34:25.348Z",
          "__v": 0
        },
        {
          "_id": "635526c1d5bff54f408834ee",
          "user": "634266353210313240b3d115",
          "title": "NOTE 3",
          "description": "dsvhdhwpighp weo w qhg qp; gqgqg k",
          "tag": "personal",
          "date": "2022-10-23T11:34:25.348Z",
          "__v": 0
        },
        {
          "_id": "635526c1d5bff54f408834ee",
          "user": "634266353210313240b3d115",
          "title": "NOTE 3",
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto illum debitis, id enim optio, nemo error repellat ex eaque dolorum tenetur suscipit rerum blanditiis nesciunt labore asperiores sunt! Nihil dolore labore asperiores.",
          "tag": "personal",
          "date": "2022-10-23T11:34:25.348Z",
          "__v": 0
        }
      ]
    const [notes,setNotes]=useState(initial_notes)

    

    return(
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;