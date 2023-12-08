//import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

import Profile from './Profile';
import Login from './Login';
import { LoginContext } from './LoginContext';


import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const[username,setUsername]=useState("")
  const[price,setPrice]=useState("")
  const[quantity,setQuantity]=useState("")
  const[descrip,setDescrip]=useState("")

  const[showprofile,setShowprofile]=useState(false)

  return (
    <div className="App">
      <Card/>
      <Card.Header/>
      <LoginContext.Provider value={{username,price,quantity,descrip,setUsername,setPrice,setQuantity,setDescrip,setShowprofile}}>
        {showprofile ? <Profile/> : <Login/>}
      </LoginContext.Provider>
      
    </div>
  );
}

export default App;

