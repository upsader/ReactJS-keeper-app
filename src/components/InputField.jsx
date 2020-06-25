import React, { useState } from "react";

function InputField(props){

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

    return (
        <form>
            <input 
            name="title" 
            onChange={updateNote} 
            placeholder="Title" 
            value={notes.title}
            />
            <textarea 
            name="content" 
            onChange={updateNote} 
            placeholder="Take a note..." 
            value={notes.content}
            />
            <button onClick={handleClick}>Add</button>
        </form>
    )
}


export default InputField;