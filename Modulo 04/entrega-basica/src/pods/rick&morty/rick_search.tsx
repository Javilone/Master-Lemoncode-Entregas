import React, { useEffect, useState } from "react";
import { useDebounce } from "../../common-app/useDebounce";
import { Pagination } from "./rick_pagination";
import { Input } from "./rick_input";
import { CharacterList } from "./rick_character_list";

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
  const [pages, setPages] = useState<number>(0);
  const debouncedInputValue = useDebounce(inputValue, 1000);

  // TODO Agregar manejo de errores if (!response.ok) {throw new Error("")}
  const fetchCharacters = (page: number = 1) => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setPages(data.info.pages);
      });
  };

  // Para llamar a fetchCharacters en la pág1 por defecto la primera vez.
  useEffect(() => {
    fetchCharacters();
  }, []);

  // Para el uso de la búsqueda automática en la caja de búsqueda.
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
      <Input inputValue={inputValue} setInputValue={setInputValue} />
      <Pagination pages={pages} fetchCharacters={fetchCharacters} />
      <CharacterList filteredCharacters={filteredCharacters} />
    </>
  );
};
