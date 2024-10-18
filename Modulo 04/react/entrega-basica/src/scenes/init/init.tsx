import React from "react";

import "../init/init_styles.css";

export const InitPage: React.FC = () => {
  return (
    <div className="init-global">
      <h1>Elige una opción</h1>
      {/*Insertar aquí imágenes para cada sección del laboratorio*/}
      {/*Estos dos vínculos serán botones enlaces a respectivas páginas*/}
      <div className="init-menu">
        <a href="/github_members">
          <img src="/images/person.svg" className="image-option" />
        </a>
        <a href="/list">
          <img src="/images/rickymorty.jpg" className="image-option" />
        </a>
        <p>BUSCAR ORGANIZACIONES @GitHub</p>
        <p>RICK AND MORTY</p>
      </div>
    </div>
  );
};
