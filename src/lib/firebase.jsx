
import dotenv from 'dotenv';
dotenv.config();
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
const { NEXT_API_KEY } = process.env


console.log(process.env.NEXT_API_KEY)
console.log(NEXT_API_KEY)

const firebaseConfig = {
    apiKey: process.env.NEXT_API_KEY,
    authDomain: process.env.NEXT_AUTH_DOMAIN,
    projectId: process.env.NEXT_PROJECT_ID,
    storageBucket: process.env.NEXT_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_APP_ID,
    measurementId: process.env.NEXT_MEASUREMENT_ID
  };

const app = initializeApp(firebaseConfig);

export default app;

export const auth = getAuth(app);


//------------------ Auth--------------------///

// Función para iniciar sesión con usuario y contraseña
export const signIn = async(data)=>{
    const {email, contraseña} = data
    return await signInWithEmailAndPassword(auth, email, contraseña);
}

// Función para cerrar sesión
export const logOut = () =>{
    signOut(auth);
    return {message:'Cerro la sesion exitosamente'};
}

// // Función para crear usuario
// export const createUser = async(data) =>{
//     const {email, contraseña} = data
//     return await createUserWithEmailAndPassword(auth, email, contraseña);
// }

// // Función para actualizar el perfil del usuario
// export const updateUser = async (user) =>{
//     if(auth.currentUser) return updateProfile(auth.currentUser, user)
// }


// // Función para iniciar sesión con Google
// export const singnInWithGoogle = async () => {
//     const googleProvider = new GoogleAuthProvider();
//     return await signInWithPopup(auth, googleProvider)
// }