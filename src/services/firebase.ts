import { initializeApp } from 'firebase/app';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

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
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6LdYSQAnAAAAAHVP9_BI6PxW-hrwDbsZW0eeyrw4'),
});

export const auth = getAuth(app);
export const db = getFirestore(app);
