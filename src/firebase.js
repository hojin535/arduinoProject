import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCee2paKwzNwjMWYkvBIQdOaG3tb-aWQt4",
  authDomain: "aruino-51411.firebaseapp.com",
  databaseURL: "https://aruino-51411-default-rtdb.firebaseio.com",
  projectId: "aruino-51411",
  storageBucket: "aruino-51411.appspot.com",
  messagingSenderId: "102855759972",
  appId: "1:102855759972:web:78488e4ab63f9b1a1fe771",
  measurementId: "G-JF637PK9XW",
};

const app = initializeApp(firebaseConfig);

//export default app;
export const db = getDatabase(app);
