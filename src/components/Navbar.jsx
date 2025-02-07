import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import menuIcon from '/src/assets/menu.png';
import closeIcon from '/src/assets/close.png';
import userIcon from '/src/assets/user.png';
import logoutIcon from '/src/assets/logout.png';

function Navbar({ user, handleGoogleLogin, handleLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCoursesDropdown, setShowCoursesDropdown] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleCoursesDropdown = () => {
    setShowCoursesDropdown(!showCoursesDropdown);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".courses-dropdown") && !event.target.closest(".courses-link")) {
        setShowCoursesDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed w-full top-0 z-20 bg-transparent backdrop-blur-md bg-opacity-50">
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Botón de menú móvil */}
        {!menuOpen && (
          <button onClick={handleMenuToggle} className="sm:hidden flex items-center p-2">
            <img src={menuIcon} alt="Menu Icon" className="w-8 h-8" />
          </button>
        )}

         {/* Menú móvil */}
<div
  className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${
    menuOpen ? "translate-x-0" : "-translate-x-full"
  } sm:hidden`}
>
  <button onClick={closeMenu} className="absolute top-5 left-5">
    <img src={closeIcon} alt="Close Icon" className="w-8 h-8" />
  </button>

  <ul className="text-white text-2xl space-y-6 text-center">
    <li>
      <Link to="/" className="block py-3" onClick={closeMenu}>
        Inicio
      </Link>
    </li>
    <li className="relative">
      <button className="block py-3 w-full courses-link" onClick={toggleCoursesDropdown}>
        Cursos
      </button>
      {showCoursesDropdown && (
        <div className="courses-dropdown absolute bg-gray shadow-lg p-4 rounded-lg mt-2 w-64 left-1/2 transform -translate-x-1/2 top-16 text-left">
          <h1 className="text-x2 text-black font-bold">Pregrabados</h1>
          <ul className="mt-3 space-y-2">
            <li className="text-lg font-semibold">Marketing</li>
            <li className="text-lg font-semibold">Productividad</li>
            <li className="text-lg font-semibold">Ventas</li>
            <li className="text-lg font-semibold">Mentalidad</li>
          </ul>
        </div>
      )}
    </li>
    <li>
      <Link to="/about" className="block py-3" onClick={closeMenu}>
        Acerca de
      </Link>
    </li>
    <li>
      <Link to="/contact" className="block py-3" onClick={closeMenu}>
        Contacto
      </Link>
    </li>
    <li>
      <Link to="/faq" className="block py-3" onClick={closeMenu}>
        FAQ
      </Link>
    </li>
  </ul>

  {/* Botones en la parte inferior */}
  <div className="absolute bottom-8 flex space-x-4">
    <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg shadow-md">
      Empezar
    </button>
    <button className="bg-gray text-white font-semibold px-6 py-3 rounded-lg shadow-md">
      Acceso
    </button>
  </div>
</div>

        {/* Menú en escritorio */}
        <div className="hidden sm:flex sm:items-center sm:space-x-8">
          <Link to="/" className="text-light hover:text-primary text-sm sm:text-base">Inicio</Link>
          <div className="relative">
            <button className="text-light hover:text-primary text-sm sm:text-base courses-link" onClick={toggleCoursesDropdown} onMouseEnter={() => setShowCoursesDropdown(true)}>
              Cursos
            </button>
            {showCoursesDropdown && (
              <div className="courses-dropdown absolute bg-white shadow-lg p-6 rounded-lg mt-2 w-80 left-1/2 transform -translate-x-1/2 sm:left-auto sm:translate-x-0" onMouseLeave={() => setShowCoursesDropdown(false)}>
                <h1 className="text-xl font-bold">Pregrabados</h1>
                <div className="mt-3 space-y-2">
                  <h2 className="text-lg font-semibold">Marketing</h2>
                  <p className="text-gray-500 text-sm">Aprende estrategias digitales efectivas.</p>
                  <h2 className="text-lg font-semibold">Productividad</h2>
                  <p className="text-gray-500 text-sm">Mejora tu eficiencia y gestión del tiempo.</p>
                  <h2 className="text-lg font-semibold">Ventas</h2>
                  <p className="text-gray-500 text-sm">Domina técnicas de ventas exitosas.</p>
                  <h2 className="text-lg font-semibold">Mentalidad</h2>
                  <p className="text-gray-500 text-sm">Desarrolla una mentalidad ganadora.</p>
                </div>
              </div>
            )}
          </div>
          <Link to="/about" className="text-light hover:text-primary text-sm sm:text-base">Acerca de</Link>
          <Link to="/contact" className="text-light hover:text-primary text-sm sm:text-base">Contacto</Link>
          <Link to="/faq" className="text-light hover:text-primary text-sm sm:text-base">FAQ</Link>
        </div>

        {/* Botón de login/logout */}
        <div>
          {!user ? (
            <button onClick={handleGoogleLogin} className="bg-transparent text-black px-6 py-3 rounded-lg shadow-md hover:bg-blue-500 transition duration-300 hidden sm:flex items-center sm:bg-white">
              <img src={userIcon} alt="Login Icon" className="w-5 h-5 mr-2" />
              <span>Iniciar sesión</span>
            </button>
          ) : (
            <button onClick={handleLogout} className="bg-transparent text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-500 transition duration-300 hidden sm:flex items-center sm:bg-red-600">
              <img src={logoutIcon} alt="Logout Icon" className="w-5 h-5 mr-2" />
              <span>Cerrar sesión</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
