import React from 'react';

const NoteItem = (props) => (

  <li onClick={(props.displayNote === props.note) ? () => props.showContent(props.displayNote) : () => props.showContent(props.note)}>
    <h2>{props.note.title}</h2>
    {/* {console.log(props.displayNote)} */}
    <p>{props.note.body}</p>
  </li>
);

export default NoteItem;
