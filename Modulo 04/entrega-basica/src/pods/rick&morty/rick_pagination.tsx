import React from "react";

// Componente que pinta los botones de las páginas que tiene la API

interface PaginationProps {
  pages: number;
  fetchCharacters: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ pages, fetchCharacters }) => {
  return (
    <div className="search-container">
      {Array.from({ length: pages }, (_, i) => (
        <button className="page-buttons" key={i} onClick={() => fetchCharacters(i + 1)}>
          {i + 1}
        </button>
      ))}
    </div>
  );
};
