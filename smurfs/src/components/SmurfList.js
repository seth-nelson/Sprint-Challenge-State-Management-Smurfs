import React, { useContext } from 'react';
import { SmurfsContext } from '../context/SmurfsContext';
import Smurf from './Smurf';


const SmurfList = () => {

    const { smurfs } = useContext(SmurfsContext);

    return (
        <div className='list-container'>
            {smurfs.map(smurf => {
                return (
                    <Smurf 
                    key={smurf.id}
                    name={smurf.name}
                    age={smurf.age}
                    height={smurf.height}
                    />
                )
            })}
        </div>
    );
}


export default SmurfList;