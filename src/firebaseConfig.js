import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA8c1WmSry0hYGe5BU1QFNQvJ3I1WoLl0k",
    authDomain: "cursos-online-f6eef.firebaseapp.com",
    projectId: "cursos-online-f6eef",
    storageBucket: "cursos-online-f6eef.firebasestorage.app",
    messagingSenderId: "921730223754",
    appId: "1:921730223754:web:a3c4f804aa9e8bd095e773"
  };

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
