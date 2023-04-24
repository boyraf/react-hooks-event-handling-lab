// Code Keypad Component Here
import React from 'react';
import ReactDOM from 'react-dom';

function Keypad (){
    function handleChange(event){
        event.preventDefault()
        console.log('Entering password...')
    }
    return (
        <div>
            <form>
                <input type="password" onChange={handleChange}/>
            </form>
        </div>
    )
}

export default Keypad;