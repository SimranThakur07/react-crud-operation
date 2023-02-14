import firebase from "firebase/compat/app"
import { getAuth } from "firebase/auth";
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAECWC0ktdPlj5EJg1wFusGCdO6aKod4Ic",
    authDomain: "todo-62aa1.firebaseapp.com",
    projectId: "todo-62aa1",
    storageBucket: "todo-62aa1.appspot.com",
    messagingSenderId: "145736511672",
    appId: "1:145736511672:web:47e4de8b035b324e04044d",
    measurementId: "G-JVGB1W7FC9"
  };

export const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = firebase.firestore();
export default db;
  