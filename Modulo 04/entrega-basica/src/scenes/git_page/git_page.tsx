import React from "react";
import { ApiSearch } from "../../core/api/apiSearch_component";
import InputComponent from "../../pods/git_page/git_input";
import { useInputContext } from "../../core/context/git_context/github_context";
import { useDebounce } from "../../common-app/useDebounce";

import "./git_styles.css";

export const GitPage: React.FC = () => {
  const { inputValue } = useInputContext();
  const debouncedInputValue = useDebounce(inputValue, 200); // Si hay búsqueda automática, ajustar el tiempo a 1000

  return (
    <>
      <div className="github-page-title">
        <h1>Consulta organizaciones en GitHub</h1>
        <InputComponent />
      </div>
      <ApiSearch apiUrl={`https://api.github.com/orgs/${debouncedInputValue}/members`} />
    </>
  );
};
