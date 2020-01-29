import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {

  state = {
    allNotes: [],
    displayNote: {},
    editNote: false
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/notes')
      .then(res => res.json())
      .then(data => this.setState({
        allNotes: data
      }))
      ;
  }

  showContent = (note) => {
    // if (this.state.displayNote) {
    //   this.setState({
    //     editNote: false
    //   })
    // } else {
      this.setState({
        displayNote: note,
        editNote: !this.state.editNote
      })
    // }
  }

  handleSubmit = () => {
    // e.persist()
    // e.preventDefault();
    // console.log(e)
    // 
    
  }
  

  
  render() {
    // console.log(this.state.displayNote)
   
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar allNotes={this.state.allNotes} showContent={this.showContent} displayNote={this.state.displayNote}/>
          <Content displayNote={this.state.displayNote} handleSubmit={this.handleSubmit} editNote={this.state.editNote}/>
          
          
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
