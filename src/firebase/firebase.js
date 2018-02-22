import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDQVN0aOjEY56ZrGWTux215ANvkmSIlhDg",
    authDomain: "expensify-app-71442.firebaseapp.com",
    databaseURL: "https://expensify-app-71442.firebaseio.com",
    projectId: "expensify-app-71442",
    storageBucket: "expensify-app-71442.appspot.com",
    messagingSenderId: "818919110065"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProivder = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProivder, database as default };