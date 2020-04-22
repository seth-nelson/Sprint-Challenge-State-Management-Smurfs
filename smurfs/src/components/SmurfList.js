import React, { useContext } from 'react';
import { SmurfsContext } from '../context/SmurfsContext';
import Smurf from './Smurf';


const SmurfList = () => {

    const { smurfs } = useContext(SmurfsContext);

    return (
        <div className='list-container'>
            <h2>The Village</h2>
            {smurfs.map(smurf => <Smurf key={smurf.id} {...smurf} /> )}
        </div>
    );
}


export default SmurfList;