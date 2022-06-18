import React from 'react';

function Note(cons){
    return(
        <div className='note'>
        <h1>{cons.title}</h1>
        <p>{cons.txt}</p>
        </div>
    );
};
export default Note;