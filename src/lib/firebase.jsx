// Import the functions you need from the SDKs you need
/* se crean 2 carpetas, Hook y Lib en la raiz del proyecto
        //proyecto/lib/firebase.jsx
        //proyecto/Hook/use-user.jsx
Este archivo se coloca dentro de una carpeta lib en la raiz del proyecto, y la carpeta Hook  use-user.jsx
*/

import dotenv from 'dotenv';
dotenv.config();
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile,signInWithPopup  } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

export const auth = getAuth(app);


//------------------ Auth--------------------///

// Función para iniciar sesión con usuario y contraseña
export const signIn = async(data)=>{
    const {email, contraseña} = data
    return await signInWithEmailAndPassword(auth, email, contraseña);
}

// Función para crear usuario
export const createUser = async(data) =>{
    const {email, contraseña} = data
    return await createUserWithEmailAndPassword(auth, email, contraseña);
}

// Función para actualizar el perfil del usuario
export const updateUser = async (user) =>{
    if(auth.currentUser) return updateProfile(auth.currentUser, user)
}

// Función para cerrar sesión
export const logOut = () =>{
    signOut(auth);
    return {message:'Cerro la sesion exitosamente'};
}

// Función para iniciar sesión con Google
export const singnInWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    return await signInWithPopup(auth, googleProvider)
}