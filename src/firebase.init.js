import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAVgoZo2iyQrCy0KUomnzJsK1-BY-n_P40",
  authDomain: "genius-car-services-49d86.firebaseapp.com",
  projectId: "genius-car-services-49d86",
  storageBucket: "genius-car-services-49d86.appspot.com",
  messagingSenderId: "156825206304",
  appId: "1:156825206304:web:378f0d675598ac1f744645"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;