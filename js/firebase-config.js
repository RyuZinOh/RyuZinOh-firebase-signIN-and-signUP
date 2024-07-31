
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js"; 

const firebaseConfig = {
  apiKey: "AIzaSyDwDYKCQhDRX27cT0DFC8y0VvSSvKBAG64",
  authDomain: "sabers-72db7.firebaseapp.com",
  databaseURL: "https://sabers-72db7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sabers-72db7",
  storageBucket: "sabers-72db7.appspot.com",
  messagingSenderId: "330705660301",
  appId: "1:330705660301:web:abcff17179dd36442ff5c4",
  measurementId: "G-CXHM5Y0JL6"  
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

export { auth };
