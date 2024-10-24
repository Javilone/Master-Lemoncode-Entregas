import React from "react";
import { Link, useParams } from "react-router-dom";

// Comparte los estilos y clases de la página de git --> git_details_styles.css

interface CharacterEntity {
  id: number;
  name: string;
  origin: {
    name: string;
  };
  image: string;
  status: string;
  episode: string[];
  gender: string;
}

export const DetailRickMorty: React.FC = () => {
  const { id } = useParams();

  const [character, setCharacter] = React.useState<CharacterEntity>();

  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then(setCharacter);
  }, []);

  return (
    <div className="detail-member-container">
      {character ? (
        <>
          <Link to="/rick">Volver</Link>
          <h1>{character.name}</h1>
          <img src={character.image} />
          <p>
            <b>Nombre:</b>
            {character.name}
          </p>
          <p>
            <b>Id:</b> {character.id}
          </p>
          <p>
            <b>Género:</b>
            {character.gender}
          </p>
          <p>
            <b>Estado:</b> {character.status}
          </p>
          <p>
            <b>Lugar de origen:</b> {character.origin.name}
          </p>
        </>
      ) : (
        <h1>Loading member</h1>
      )}{" "}
    </div>
  );
};
