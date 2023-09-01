import React from "react";

import { motion } from "framer-motion";
import { HeaderApp } from "../header/HeaderApp";
import { Footer } from "../footer/Footer";
import "../about/About.css";
export const About = () => {
  return (
    <div className="containerAbout">
      <HeaderApp />
      <section className="sectionAbout">
        <article className="art1">
          <div className="titleArt1">
            <h2>Bienvenidos a todos los pepinillos Ricks!</h2>
            <p>
              Aquí podrán encontrar mucha información a cerca de los personajes
              de la serie, entre ella su origen, su estado actual, su especie y
              más. Asi como también informacion sobre temporadas y episodios.
            </p>
          </div>
        </article>
				
        <article className="art2">
          <div className="titleArt2">
            <h3>Un poco sobre mi!</h3>
            <h4>Hola mi nombre es Fernando y soy desarrollador Full stack!</h4>
          </div>
          <div className="parrafArt2">
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
          <img src="" alt="" />
        </article>
      </section>
      <Footer />
    </div>
  );
};
