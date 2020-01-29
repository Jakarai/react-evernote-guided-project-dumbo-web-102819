import React, { Component } from 'react';

class NoteEditor extends Component {

  state = {
    body: "",
    title: "",
    displayedNote: this.props.displayNote
  }  

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    // e.persist();
    e.preventDefault();
    // console.log(e)
    fetch(`http://localhost:3000/api/v1/notes/${this.state.displayedNote.id}`,{
      method: 'PATCH',
      headers: {
      'Content-Type': 'application/json'
    },
      body: JSON.stringify({
        title: this.state.title,
        body: this.state.body
      })
    })
  }
  

  render() {
    // console.log(this.state, this.props)
    return (
      <form className="note-editor" onSubmit={(e) => this.handleSubmit(e)}>
        <input type="text" name="title" onChange={this.handleChange} />
        <textarea name="body" onChange={this.handleChange} />
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button" onClick={this.props.cancelEdit}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
