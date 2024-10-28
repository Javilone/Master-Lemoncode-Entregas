import React from "react";
import { Link } from "react-router-dom";

// Componente que pinta a los personajes

interface CharacterEntity {
  id: number;
  name: string;
  origin: {
    name: string;
  };
  image: string;
}

interface CharacterListProps {
  filteredCharacters: CharacterEntity[];
}

export const CharacterList: React.FC<CharacterListProps> = ({ filteredCharacters }) => {
  return (
    <div className="list-rick-container">
      <span className="list-header">Imagen</span>
      <span className="list-header">Id</span>
      <span className="list-header">Nombre</span>
      <span className="list-header">Origen</span>
      {filteredCharacters.map((character) => (
        <React.Fragment key={character.id}>
          <img src={character.image} alt={character.name} />
          <span>{character.id}</span>
          <Link to={`/detail_rick/${character.id}`}>{character.name}</Link>
          <span>{character.origin.name}</span>
        </React.Fragment>
      ))}
    </div>
  );
};
