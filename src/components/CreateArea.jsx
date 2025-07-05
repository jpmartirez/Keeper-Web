import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevValue) => {
      return {...prevValue, [name]: value};
    })
  }

  function submitNote(event) {
    event.preventDefault();
    props.addNote(note);
    setNote({title: "", content: ""});
  }

  function expand(){
    setExpanded(true);
  }


  return (
    <div>
      <form>
        {isExpanded && <input name="title" placeholder="Title" value={note.title} onChange={handleChange}/>}
        <textarea name="content" placeholder="Take a note..." rows={isExpanded?3:1} value={note.content} onClick={expand} onChange={handleChange}/>
        <Zoom in={isExpanded}>
          <button onClick={submitNote}><AddIcon/></button>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
