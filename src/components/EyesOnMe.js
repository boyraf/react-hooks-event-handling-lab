// Code EyesOnMe Component Here
import React from 'react';
import ReactDOM from 'react-dom';

 
function EyesOnMe(){
    function handleBlur(event){
        event.preventDefault()
        console.log('Hey! Eyes on me!')
    }
    
    function handleFocus(event){
        event.preventDefault()
        console.log('Good!')
    }

    return (
        <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button>
    )
 }

export default EyesOnMe;