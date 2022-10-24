import React from 'react'

export const NoteItem = (props) => {
  return (
    <div className='col-md-3 my-2'>
        <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">{props.note.title}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        {props.note.tag}
                      </h6>
                      <p className="card-text">{props.note.description}</p>
                      <i class="fa fa-lg fa-solid fa-trash"></i>
                      <i class="fa fa-lg fa-light fa-file-pen mx-2"></i>
                    </div>
                  </div>
    </div>
  )
}
