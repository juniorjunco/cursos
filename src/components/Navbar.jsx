import React, { useState } from "react";
import { Link } from "react-router-dom";

// Importar las imágenes
import menuIcon from '/src/assets/menu.png';
import userIcon from '/src/assets/user.png';
import logoutIcon from '/src/assets/logout.png';

function Navbar({ user, handleGoogleLogin, handleLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed w-full top-0 z-10 bg-transparent backdrop-blur-md bg-opacity-50">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center">
          <button 
            onClick={handleMenuToggle} 
            className="sm:hidden flex items-center p-2 mr-20"
          >
            <img 
              src={menuIcon} 
              alt="Menu Icon" 
              className="w-6 h-6" 
            />
          </button>

          <div 
            className={`flex flex-col sm:flex-row sm:items-center sm:space-x-8 mt-4 sm:mt-0 ${menuOpen ? 'block' : 'hidden'} sm:block`}
          >
            <Link to="/" className="text-light hover:text-primary text-sm sm:text-base mx-4">Inicio</Link>
            <Link to="/about" className="text-light hover:text-primary text-sm sm:text-base mx-4">Cursos</Link>
            <Link to="/about" className="text-light hover:text-primary text-sm sm:text-base mx-4">Acerca de</Link>
            <Link to="/about" className="text-light hover:text-primary text-sm sm:text-base mx-4">Contacto</Link>
            <Link to="/about" className="text-light hover:text-primary text-sm sm:text-base mx-4">FAQ</Link>
          </div>
        </div>

        <div>
          {!user ? (
            <button 
              onClick={handleGoogleLogin} 
              className="bg-transparent text-black px-6 py-3 rounded-lg shadow-md hover:bg-blue-500 transition duration-300 flex items-center sm:bg-white"
            >
              <img 
                src={userIcon} 
                alt="Login Icon" 
                className="w-5 h-5 mr-2 sm:hidden" 
              />
              <span className="hidden sm:inline text-sm sm:text-base">Iniciar sesión</span>
            </button>
          ) : (
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-4"></h2>
              <button 
                onClick={handleLogout} 
                className="bg-transparent text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-500 transition duration-300 flex items-center sm:bg-red-600"
              >
                <img 
                  src={logoutIcon} 
                  alt="Logout Icon" 
                  className="w-5 h-5 mr-2 sm:hidden" 
                />
                <span className="hidden sm:inline text-sm sm:text-base">Cerrar sesión</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
