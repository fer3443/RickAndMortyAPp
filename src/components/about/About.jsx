import React, {useState}from "react";

import { motion } from "framer-motion";

import { Footer } from "../footer/Footer";

import "../about/About.css";
import { Loader } from "../loader/Loader";
export const About = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 500);
  return (
   <>
     {
      loading ? (<Loader/>) : (
        <div className="containerAbout">
      <section className="sectionAbout">
        <article className="art1">
            <h2>Bienvenidos a todos los pepinillos Ricks!</h2>
          <div className="titleArt1">
            <p>
              Aquí podrán encontrar mucha información a cerca de los personajes
              de la serie, entre ella su origen, su estado actual, su especie y
              más. Asi como también informacion sobre temporadas y episodios.
            </p>
            <motion.div initial={{scale: 0, x: 150}} transition={{delay:.5}} animate={{scale:1, x: 0}}>
            <img src="src/assets/pepinillo-rick.png" alt="" />
            </motion.div>
          </div>
        </article>
				
        <article className="art2">
          <div className="titleArt2">
            <h3>Un poco sobre mi!</h3>
          </div>
          <div className="parrafArt2">
            <h5>Hola mi nombre es Fernando y soy desarrollador Full stack!</h5>
            <p>
              Esta pequeña app dedicada a una serie que considero de las
              mejores, me sirvió como práctica para el consumo de Apis,
              estilizado con css, un poco de BootStrap 5 y el desarrollo a
              traves a de React.js.
            </p>
            <p>
              Me considero un apasionado por el desarrollo de software, he
              estado inmerso en el mundo del desarrollo Full Stack, abarcando
              tanto el frontend como el backend de las aplicaciones web. A pesar
              de encontrarme en la etapa inicial de mi carrera, mi entusiasmo y
              determinación me han llevado a crear una aplicación web única y
              atractiva (o eso espero).
            </p>
            <p>
              Cualquier sugerencia o consulta, no dudes en enviarme un mensaje a
              traves de cualquiera de mis redes! Saludos y espero disfrutes de
              esta app tanto como yo al crearla!.
            </p>
          </div>
        </article>
      </section>
      <Footer />
    </div>
      )
    }
   </>
  );
};
