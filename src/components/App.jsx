import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes(prevNotes => {
      return [...prevNotes, note];
    })
  }

  function deleteNote(id){
    setNotes(notes.filter((note, index) => {
      return index !== id;
    }));
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((note, index) => {
        return <Note key={index} id={index} deleteNote={deleteNote} title={note.title} content={note.content}/>
      })}
      <Footer />
    </div>
  );
}

export default App;
