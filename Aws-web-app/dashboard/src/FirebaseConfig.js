import firebase from 'firebase/app'
import React from 'react'
const fireConfig = {
        apiKey: "AIzaSyBNNxfF9iveJTKICgukGUwxCsO8cmtLKQE",
        authDomain: "kumos-f4d9a.firebaseapp.com",
        databaseURL: "https://kumos-f4d9a.firebaseio.com",
        projectId: "kumos-f4d9a",
        storageBucket: "kumos-f4d9a.appspot.com",
        messagingSenderId: "1044651688607",
        appId: "1:1044651688607:web:639eb44d36faf9773e98aa",
        measurementId: "G-75LT4EWR1Z"
    }
const app = firebase.initializeApp(fireConfig);
export default !firebase.apps.length ? app : firebase.app();