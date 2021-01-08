import app from 'firebase/app';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyBwlH4njig9sKAkP95VUIRS6eLrK5pslZk",
    authDomain: "home-d04f8.firebaseapp.com",
    projectId: "home-d04f8",
    storageBucket: "home-d04f8.appspot.com",
    messagingSenderId: "145836073375",
    appId: "1:145836073375:web:3b32170da4529bb928ddaa",
    measurementId: "G-FYR8LJM094"
  };


class Firebase {

    constructor(){
        app.initializeApp(config);
        this.db = app.firestore();
    }
}

export default Firebase;