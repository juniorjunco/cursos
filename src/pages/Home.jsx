import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importación de imágenes correctamente
import crecimiento from "../assets/img/crecimiento.jpeg";
import finanzas from "../assets/img/finanzas.jpeg";
import salud from "../assets/img/salud.jpeg";
import video from "../assets/img/video-02.mp4";
import testimonio1 from "../assets/img/testimonio-movil.jpg";
import testimonio2 from "../assets/img/testimonio2-movil.jpg";
import testimonio3 from "../assets/img/testimonio3-movil.jpg";
import section6 from "../assets/img/section6.jpg";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Ajustado para pantallas grandes
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Muestra 1 en pantallas pequeñas
        },
      },
    ],
  };

  return (
    <div className="bg-white">
      {/* Sección Hero con imagen de fondo */}
      <section className="relative w-screen min-h-screen bg-mobile bg-no-repeat bg-cover bg-center flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="p-8 rounded">
            <h1 className="text-4xl sm:text-5xl font-bold">Descubre tu máximo potencial</h1>
            <p className="mt-4 text-lg px-1">Cursos, eventos y estrategias para transformar tu vida.</p>
            <button className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-700 text-white font-bold rounded-lg">
              Empieza Ahora
            </button>
          </div>
        </div>
      </section>

      {/* Sección de Beneficios */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">¿Qué aprenderás con Nuestros Cursos?</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 md:w-1/3 p-6 text-center">
            <img
              src={crecimiento}
              alt="Crecimiento Personal"
              className="mx-auto w-32 h-32 sm:w-60 sm:h-60 mb-2 rounded-lg transition-transform duration-300 hover:scale-110"
            />
            <h3 className="text-xl font-bold">Crecimiento Personal</h3>
            <p className="mt-2">Aprende estrategias para mejorar tu mentalidad y alcanzar tus metas.</p>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 p-6 text-center">
            <img
              src={finanzas}
              alt="Finanzas y Negocios"
              className="mx-auto w-32 h-32 sm:w-60 sm:h-60 mb-2 rounded-lg transition-transform duration-300 hover:scale-110"
            />
            <h3 className="text-xl font-bold">Finanzas y Negocios</h3>
            <p className="mt-2">Domina herramientas para potenciar tu carrera y emprendimiento.</p>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 p-6 text-center">
            <img
              src={salud}
              alt="Salud y Bienestar"
              className="mx-auto w-32 h-32 sm:w-60 sm:h-60 mb-2 rounded-lg transition-transform duration-300 hover:scale-110"
            />
            <h3 className="text-xl font-bold">Salud y Bienestar</h3>
            <p className="mt-2">Conoce hábitos saludables para una vida plena y equilibrada.</p>
          </div>
        </div>
      </section>

      {/* Sección de Video */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        >
          <source src={video} type="video/mp4" />
          Tu navegador no soporta videos.
        </video>

        {/* Contenido encima del video */}
        <div className="relative z-10 p-6 px-1 text-white">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold">Transforma tu vida</h1>
          <h2 className="text-lg sm:text-2xl mt-2 text-gray-600">
            Cierra la brecha entre donde estás y donde deseas estar.
          </h2>
          <button className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-700 text-white font-bold rounded-lg">
            Empezar Ahora
          </button>
        </div>
      </section>

      {/* Sección de Testimonios */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Testimonios</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-md rounded-lg text-center">
              <img src={testimonio1} alt="Testimonio 1" className="w-32 h-32 mx-auto rounded-full object-cover mb-4" />
              <h2 className="text-xl font-semibold">Juan Pérez</h2>
              <h3 className="text-gray-600">"Este curso cambió mi vida completamente. ¡Recomendado!"</h3>
            </div>

            <div className="bg-white p-6 shadow-md rounded-lg text-center">
              <img src={testimonio2} alt="Testimonio 2" className="w-32 h-32 mx-auto rounded-full object-cover mb-4" />
              <h2 className="text-xl font-semibold">María Gómez</h2>
              <h3 className="text-gray-600">"Aprendí muchísimo, los profesores son increíbles."</h3>
            </div>

            <div className="bg-white p-6 shadow-md rounded-lg text-center">
              <img src={testimonio3} alt="Testimonio 3" className="w-32 h-32 mx-auto rounded-full object-cover mb-4" />
              <h2 className="text-xl font-semibold">Carlos López</h2>
              <h3 className="text-gray-600">"Increíble experiencia, material de alta calidad."</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Última Sección */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-8 p-8">
        <div className="flex flex-col items-start w-full md:w-3/5">
          <h1 className="text-black text-4xl md:text-5xl font-bold mb-4">
            Do you have a hunger to increase the quality of your life?
          </h1>
          <img src={section6} alt="Descripción" className="w-full h-[500px] md:h-[457px] rounded-lg object-cover shadow-lg" />
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-gray-600 text-lg max-w-md">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis aliquid quibusdam laboriosam voluptate voluptas 
            repudiandae perferendis, ad voluptates, a, voluptatum eos iusto quo soluta quisquam sapiente debitis obcaecati temporibus doloribus!
          </h2>
          <button className="mt-4 px-6 py-3 bg-orange-500 hover:bg-orange-700 text-white font-bold rounded-lg transition duration-300">
            Empezar Ahora
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;