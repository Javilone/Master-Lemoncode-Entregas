import React from "react";
import { ApiSearch } from "../../core/api/apiSearch_component";

// Comparte los mismos estilos y clases de la página de git --> git_styles.css
import "../rick&morty_page/rick_styles.css";

export const RickPage: React.FC = () => {
  return (
    <>
      <div className="github-page-title">
        <h1>Consulta personajes de Rick & Morty</h1>
      </div>
      <ApiSearch apiUrl={`https://rickandmortyapi.com/api/character?page=1`} />
    </>
  );
};
