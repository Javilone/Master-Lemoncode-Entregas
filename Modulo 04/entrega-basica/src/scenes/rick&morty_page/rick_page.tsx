import React from "react";
import { ApiSearch } from "../../core/api/apiSearch_component";
import InputComponent from "../../pods/git_page/git_input";

import "../rick&morty_page/rick_styles.css";

// Comparte los mismos estilos y clases de la página de git --> git_styles.css

export const RickPage: React.FC = () => {
  return (
    <>
      <div className="github-page-title">
        <h1>Consulta personajes de Rick & Morty</h1>
        {/* AQUI HE DE METER LA PAGINACIÓN, QUE NO ESTÁ EMPEZADA */}
      </div>
      <ApiSearch apiUrl={`https://rickandmortyapi.com/api/character?page=1`} />
    </>
  );
};
