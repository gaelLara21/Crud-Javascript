// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtUNmdKD0oeZspQYa4wmymecWZtdPZXJo",
  authDomain: "crud-con-firebase-y-javascript.firebaseapp.com",
  projectId: "crud-con-firebase-y-javascript",
  storageBucket: "crud-con-firebase-y-javascript.appspot.com",
  messagingSenderId: "1090436827189",
  appId: "1:1090436827189:web:eede9c89937dcda23b497c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const saveTask = (title, description) =>
    addDoc(collection(db, "tasks"), {title, description });

    export const getTasks = () => getDocs(collection(db, 'tasks'));

    export const onGetTasks = (callback) => onSnapshot(collection(db, 'tasks'), callback);

    export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

    export const getTask = (id) => getDoc(doc(db, "tasks", id));

    export const updateTask = (id, newFields) => updateDoc(doc(db, "tasks", id), newFields);