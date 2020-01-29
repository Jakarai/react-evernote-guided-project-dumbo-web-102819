import React, { Fragment } from 'react';

const NoteViewer = (props) => {
  return (
    <Fragment>
      <h2>{props.displayNote.title}</h2>
      <p>{props.displayNote.body}</p>
      <button onClick={props.renderEdit}>Edit</button>
    </Fragment>
  );
}

export default NoteViewer;
