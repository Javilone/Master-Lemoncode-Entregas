import React, { useEffect, useState } from "react";
import { useInputContext } from "../../core/context/github_page_context/github_context";

const InputComponent: React.FC = () => {
  const { inputValue, setInputValue } = useInputContext();
  const [input, setInput] = useState(inputValue);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInput(newValue);
    /* setInputValue(newValue); <-- Descomentar por si quiero hacer la búsqueda automática */
  };

  useEffect(() => {
    setInput(inputValue);
  }, [inputValue]);

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={() => setInputValue(input)}>Buscar</button>
    </div>
  );
};

export default InputComponent;
