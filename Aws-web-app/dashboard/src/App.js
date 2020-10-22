import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from "./routes";
import AppBar from '@material-ui/core/AppBar'
import { Button, IconButton, Toolbar } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom'
import app from './FirebaseConfig'
import firebase from 'firebase/app'
import 'firebase/auth'

function App() {
  console.log(app);
  const history = useHistory();
  const[userAuthenticated, setUserAutenticated] = useState("")
  useEffect(() => {onLoad()},[]);
  async function onLoad () {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user.email)
        setUserAutenticated(true);
        // User is signed in.
      } else {
        setUserAutenticated(false);
        // No user is signed in.
      }
    });
  }
  async function handleLogout() {
    await firebase.auth().signOut();
    setUserAutenticated(false);
    history.push("/login");
  }
  if (userAuthenticated !== "") {
    return (
      <div>
      <AppBar position="static" style={{color:"black", backgroundColor:"white", alignItems:"flex-end"}}>
        <Toolbar>
          <IconButton></IconButton>
          {userAuthenticated ? <div><Button color="inherit" onClick={handleLogout}>Log Out</Button></div>
          :
          <div><Button color="inherit" component={Link} to="/login">Login</Button>
          <Button color="inherit" component={Link} to="/sign_up">Sign Up</Button></div>      
        }  
        </Toolbar>
      </AppBar>
      <div></div>
      <Routes />
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default App;
