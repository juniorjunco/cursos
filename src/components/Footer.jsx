import React from "react";
import { Link } from "react-router-dom";
import facebookIcon from "../assets/facebook.png";
import twitterIcon from "../assets/twitter.png";
import instagramIcon from "../assets/instagram.png";

function Footer() {
  return (
    <footer className="bg-dark text-light p-6 mt-8">
      <div className="container mx-auto flex justify-between flex-col md:flex-row">
        {/* Lado Izquierdo: Enlaces del Navbar */}
        <div className="flex flex-col mb-4 md:mb-0">
          <Link to="/" className="text-gray hover:text-primary text-sm sm:text-base mb-2">Inicio</Link>
          <Link to="/about" className="text-gray hover:text-primary text-sm sm:text-base mb-2">Cursos</Link>
          <Link to="/about" className="text-gray hover:text-primary text-sm sm:text-base mb-2">Acerca de</Link>
          <Link to="/contact" className="text-gray hover:text-primary text-sm sm:text-base mb-2">Contacto</Link>
          <Link to="/faq" className="text-gray hover:text-primary text-sm sm:text-base">FAQ</Link>
        </div>

        {/* Lado Derecho: Formulario de Contacto */}
        <div className="flex flex-col w-full md:w-1/2">
          <h3 className="text-gray mb-2">Contáctanos</h3>
          <form className="flex flex-col">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="p-2 rounded mb-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <textarea
              placeholder="Tu mensaje"
              className="p-2 rounded mb-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              rows="4"
              required
            />
            <button type="submit" className="bg-primary text-light px-4 py-2 rounded hover:bg-light transition duration-300">
              Enviar
            </button>
          </form>
        </div>
      </div>

      {/* Parte Inferior: Encabezados y Redes Sociales */}
      <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-wrap space-x-2 md:space-x-4 text-gray text-xs sm:text-sm">
          <h3>Privacy Policy</h3>
          <h3>Terms of Service</h3>
          <h3>© 2025. All rights reserved.</h3>
        </div>

        {/* Redes Sociales */}
        <div className="flex space-x-3 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" className="w-6 h-6 sm:w-8 sm:h-8" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" className="w-6 h-6 sm:w-8 sm:h-8" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="w-6 h-6 sm:w-8 sm:h-8" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
