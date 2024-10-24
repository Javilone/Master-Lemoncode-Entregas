import React from "react";
import { RickSearch } from "../../pods/rick&morty/rick_search";
import { GitSearch } from "../../pods/git_page/git_search";

export const ApiSearch: React.FC<{ apiUrl: string }> = ({ apiUrl }) => {
  if (apiUrl.includes("github")) {
    return <GitSearch />;
  }
  if (apiUrl.includes("rickandmortyapi")) {
    return <RickSearch />;
  }
};
