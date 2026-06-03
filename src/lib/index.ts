import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAyX9_fRDXOCECpF85dtbPqE_yqUdQbKmQ",
  authDomain: "lplot-hackclub.firebaseapp.com",
  projectId: "lplot-hackclub",
  storageBucket: "lplot-hackclub.firebasestorage.app",
  messagingSenderId: "426605408890",
  appId: "1:426605408890:web:0361f685d7c29b1a1581c3"
};

export const firebaseApp = initializeApp(firebaseConfig);