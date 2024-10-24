import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDebounce } from "../../common-app/useDebounce";

interface CharacterEntity {
  id: number;
  name: string;
  origin: {
    name: string;
  };
  image: string;
}

export const RickSearch: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [characters, setCharacters] = useState<CharacterEntity[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<CharacterEntity[]>([]);
  const debouncedInputValue = useDebounce(inputValue, 1000);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch("https://rickandmortyapi.com/api/character/?page=1");
        const data = await response.json();
        setCharacters(data.results); // Los personajes están dentro de "results"
      } catch (error) {
        console.error("Error al cargar los personajes:", error);
      }
    };

    fetchCharacters();
  }, []);

  useEffect(() => {
    if (debouncedInputValue) {
      const filtered = characters.filter((character) => character.name.toLowerCase().includes(debouncedInputValue.toLowerCase()));
      setFilteredCharacters(filtered);
    } else {
      setFilteredCharacters(characters);
    }
  }, [debouncedInputValue, characters]);

  return (
    <>
      <div className="search-container">
        <input type="text" placeholder="Buscar personaje" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        {/*FALTA LA PAGINACION. ESTE SERÍA UN LUGAR ADECUADO
        PUEDO AGREGAR AQUI UN COMPONENTE IMPORTADO DE OTRO MÓDULO PARA QUE AGREGUE
        LAS PAGINAS CON SUS ENLACES CORRESPONDIENTES DE LLAMADA A LA API */}
      </div>
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
    </>
  );
};
