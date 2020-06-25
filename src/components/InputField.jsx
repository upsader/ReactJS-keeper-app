import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function InputField(props){

    const [isExpanded, setExpanded] = useState(false);

    const [notes, setNotes] = useState({
        title: "",
        content: ""
    });

    function updateNote(event){
        const {name, value} = event.target;
        setNotes((prevValue) => {
                return {
                    ...prevValue,
                    [name]: value
                };
        });
    }

    function handleClick(event){
        props.addNote(notes);
        setNotes({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    function expand(){
        setExpanded(true);
    }


    return (
        <form className="create-note">
            {isExpanded && <input 
            name="title" 
            onChange={updateNote} 
            placeholder="Title" 
            value={notes.title}
            />}
            <textarea 
            name="content"
            onClick={expand} 
            onChange={updateNote} 
            placeholder="Take a note..." 
            rows={isExpanded ? 3 : 1}
            value={notes.content}
            />
            <Zoom in={isExpanded}>
            <Fab onClick={handleClick}>
            <AddIcon />
            </Fab>
            </Zoom>
        </form>
    )
}


export default InputField;