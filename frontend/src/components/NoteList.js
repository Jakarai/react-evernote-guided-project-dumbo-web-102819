import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {

  const showNotes = props.allNotes.map(note => 
     <NoteItem key={note.id} note={note} showContent={props.showContent} displayNote={props.displayNote} />
  )
  return (

    
    
    <ul>
      {showNotes}
      
    </ul>
  );
}

export default NoteList;

// export default class NoteList extends React.Component {
//   renderNotes = () => { return this.props.allNotes.map(note => {
//    return  <NoteItem note={note} allNotes={this.props.allNotes}/>
//        }) 
//    }      
//  render() {
//    console.log(this.props)
//    return (
//      <ul>
//        {this.renderNotes}
//      </ul>
//    );
//  }
//  }