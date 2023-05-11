// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_gqICSxJIn0YKwmFaTIlGOMI1P2F6k5Q",
    authDomain: "cars-doctors-81c2a.firebaseapp.com",
    projectId: "cars-doctors-81c2a",
    storageBucket: "cars-doctors-81c2a.appspot.com",
    messagingSenderId: "782193973398",
    appId: "1:782193973398:web:eebd497648c28f1b780ab7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app