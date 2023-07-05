import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
const firebaseConfig = {
  apiKey: 'AIzaSyCfERKXxWmHsf6PCYdUVeio4kizbMvlm8w',
  authDomain: 'cenaestelar.firebaseapp.com',
  projectId: 'cenaestelar',
  storageBucket: 'cenaestelar.appspot.com',
  messagingSenderId: '589385035964',
  appId: '1:589385035964:web:e226a19e0d6f2fb18e60b9',
  measurementId: 'G-QZ323TNH49',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
