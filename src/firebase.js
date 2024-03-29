import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

//remember to change credentials below with your own credentials generated by firebase.
const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId:'' ,
  storageBucket: "",
  messagingSenderId: '',
  appId: '',
  measurementId: ''
};

export const app = initializeApp(firebaseConfig);
//initializing messaging service
export const messaging = getMessaging(app);
