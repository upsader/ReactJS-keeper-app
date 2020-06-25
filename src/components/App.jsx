import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import InputField from "./InputField";

function App(){

const [array, setArray] = useState([]);

    function addNote(notes) {
        setArray((prevValue) => {
            return [...prevValue,notes];
        });
    }

    function deleteNote(id) {
        setArray((prevValue) => {
            return prevValue.filter((item, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            <InputField 
                addNote={addNote}
            />
            {array.map((note, index) => (
                <Note 
                    key={index}
                    id={index}
                   title={note.title} 
                   content={note.content}
                   deleteNote={deleteNote}
                />
            ))}
            <Footer />
        </div>
    );
};

export default App;