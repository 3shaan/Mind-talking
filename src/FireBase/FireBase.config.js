// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUdMxWcBxJ9XhF-Gn7nMwbKi4OXgfv04A",
  authDomain: "mind-talking.firebaseapp.com",
  projectId: "mind-talking",
  storageBucket: "mind-talking.appspot.com",
  messagingSenderId: "1075767788148",
  appId: "1:1075767788148:web:0e93f118db4a28761c8721",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;