import React from 'react';

function Note(title,txt){
    return(
        <div className='note'>
        <h1>{title}</h1>
        <p>{txt}</p>
        </div>
    );
};
export default Note;