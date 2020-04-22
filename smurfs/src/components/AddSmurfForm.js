import React, { useState, useContext } from 'react';
import axios from 'axios';

import { SmurfsContext } from '../context/SmurfsContext';


function AddSmurfForm() {

    const [ data, setData ] = useState({
        name: '',
        age: '',
        height: ''
    })

    const newSmurf = useContext(SmurfsContext)

    const submitForm = event => {
        event.preventDefault();
        axios
            .post(`http://localhost:3333/smurfs`, data)
            .then(result => newSmurf.setSmurfs(result.data))
            .catch(error => console.log('post to server error', error))

        setData({ name: '', age: '', height: ''})
    }

    const handleChanges = event => {
        console.log('event info', event.target.value);
        setData({ ...data, [event.target.name]: event.target.value })
    }


    return (
        <div className='form-container'>
            <h4>Add a smurf to the village</h4>
            <form onSubmit={submitForm}>
                <input 
                    type='text'
                    name='name'
                    value={newSmurf.name}
                    placeHolder='Name'
                    onChange={handleChanges}
                />

                <input 
                    type='text'
                    name='age'
                    value={newSmurf.age}
                    placeHolder='Age'
                    onChange={handleChanges}
                />

                <input 
                    type='text'
                    name='height'
                    value={newSmurf.height}
                    placeHolder='Height'
                    onChange={handleChanges}
                />

                <button className='submit-button' type='submit' value='click to submit'>
                    Add Smurf
                </button>
            </form>
        </div>
    );
};


export default AddSmurfForm;