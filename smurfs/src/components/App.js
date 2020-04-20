import React, { useState, useEffect } from "react";
import SmurfContext from "../context/SmurfsContext";

import AddSmurfForm from './AddSmurfForm';
import SmurfList from './SmurfList';

import axios from 'axios';
import './App.css';


const App = () => {

  const [ smurfs, setSmurfs ] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(response => {
        setSmurfs(response.data);
        console.log('data pulled successfully', response);
      })
      .catch(error => {
        console.log('Error fetching data', error);
      })
  }, [])


  return (
    <SmurfContext.Provider value={{ smurfs, setSmurfs }}>
      <div className="App">
        <div className='Header'>
          <h1>Welcome to Smurf Village!</h1>
        </div>
        <AddSmurfForm />
        <SmurfList />
      </div>
    </SmurfContext.Provider>
  );
};


export default App;
