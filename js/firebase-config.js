
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js"; 

const firebaseConfig = {
  apiKey: process.env.API,
  databaseURL: process.env.DBURL,
  authDomain: process.env.DOMAIN,
  projectId: process.env.PID,
  storageBucket: process.env.STOREBUCKET,
  messagingSenderId: process.env.SENDERID,
  appId: process.env.APPID,
  measurementId: process.env.MEASURED,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

export { auth };

