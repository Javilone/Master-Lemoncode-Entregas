import React from "react";
import { Link } from "react-router-dom";

import "../src/list_styles.css";

interface MemberEntity {
  id: number;
  name: string;
  origin: {
    name: string;
  };
  image: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  React.useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character?page=1")
      .then((response) => response.json())
      .then((data) => setMembers(data.results)); // Los personajes están dentro de "results"
  }, []);

  return (
    <>
      <h1>Bienvenido a la página de personajes de Rick y Morty</h1>
      <div className="list-rick-container">
        <span className="list-header">Imagen</span>
        <span className="list-header">Id</span>
        <span className="list-header">Nombre</span>
        <span className="list-header">Origen</span>
        {members.map((member) => (
          <React.Fragment key={member.id}>
            <img src={member.image} alt={member.name} />
            <span>{member.id}</span>
            <Link to={`/detail/${member.id}`}>{member.name}</Link>
            <span>{member.origin.name}</span>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};
