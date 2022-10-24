import React from 'react'

export const NoteItem = (props) => {
  return (
    <div className='col-md-3'>
        <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">{props.note.title}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        {props.note.tag}
                      </h6>
                      <p className="card-text">{props.note.description}</p>
                      <a href="/" className="card-link">
                        Card link
                      </a>
                      <a href="/" className="card-link">
                        Another link
                      </a>
                    </div>
                  </div>
    </div>
  )
}
