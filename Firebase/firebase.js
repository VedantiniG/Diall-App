import * as firebase from 'firebase/compat';

const firebaseConfig = {
    apiKey: "AIzaSyBtWpIdMfu61PHOEk19tooWu-uISuDhXHM",
    authDomain: "diall-app-ce076.firebaseapp.com",
    databaseURL: "https://diall-app-ce076-default-rtdb.firebaseio.com",
    projectId: "diall-app-ce076",
    storageBucket: "diall-app-ce076.appspot.com",
    messagingSenderId: "527146723246",
    appId: "1:527146723246:web:d93f6a3a5f30779a2b8a3f",
    measurementId: "G-0HG1K5TJ6P"
}

//initialize database connection
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};