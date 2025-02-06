import React, { useState, useEffect } from "react";
import { auth, googleProvider } from "./firebaseConfig";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Usuario:", result.user);
    } catch (error) {
      console.error("Error en login:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUser(null);
    } catch (error) {
      console.error("Error en logout:", error);
    }
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
        <Navbar user={user} handleGoogleLogin={handleGoogleLogin} handleLogout={handleLogout} />
        <div className="flex-grow container mx-auto p-6 flex flex-col items-center justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
  
}

export default App;
