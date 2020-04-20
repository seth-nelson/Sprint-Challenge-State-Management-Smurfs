import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";

import { SmurfContext } from "../context/SmurfsContext";

import AddSmurfForm from './AddSmurfForm';
import SmurfList from './SmurfList';


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
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <AddSmurfForm />
        <SmurfList />
      </div>
    </SmurfContext.Provider>
  );
};


export default App;
