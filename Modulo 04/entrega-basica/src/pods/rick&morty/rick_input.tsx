import React from "react";

// Componente que pinta el input para las búsquedas

interface InputProps {
  inputValue: string;
  setInputValue: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({ inputValue, setInputValue }) => {
  return (
    <div className="search-container">
      <input type="text" placeholder="Buscar personaje" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
    </div>
  );
};
