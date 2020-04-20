import React from 'react';


const Smurf = props => {
    return (
        <div className='smurf-bio'>
            <h3>{props.name}</h3>
            <h5>Age: {props.age}</h5>
            <h5>Height: {props.height}</h5>
        </div>
    );
}


export default Smurf;