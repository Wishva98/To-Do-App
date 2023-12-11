// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBDcVwMLnTIebA2hA9hnuRws2WDKyVBqRQ",
    authDomain: "to-do-app-e322d.firebaseapp.com",
    projectId: "to-do-app-e322d",
    storageBucket: "to-do-app-e322d.appspot.com",
    messagingSenderId: "924483518352",
    appId: "1:924483518352:web:59ad48ae99a73a476b3d15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {app,auth};