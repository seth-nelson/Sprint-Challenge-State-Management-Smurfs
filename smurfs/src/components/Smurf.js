import React from 'react';


const Smurf = ({ name, age, height }) => {
    return (
        <div className='smurf-bio'>
            <h3>{name}</h3>
            <h5>Age: {age}</h5>
            <h5>Height: {height}</h5>
        </div>
    );
}


export default Smurf;