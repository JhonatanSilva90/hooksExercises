import { useState } from "react";

export function Text() {
  const [valueInput, setValueInput] = useState("");
  const [idade, setIdade] = useState("");

  const onChangeInput = (event) => {
    setValueInput(event.target.value);
  };
  const onChangeIdade = (event) => {
    setIdade(event.target.value);
  };

  return (
    <>
      <input placeholder="Nome" onChange={onChangeInput} />
      <input placeholder="Idade" onChange={onChangeIdade} value={idade} />
      <h2>
        <p>
          Olá {valueInput}, você tem {idade} anos.
        </p>
        {/* Ou */}
        {valueInput !== "" && <h3>Olá, {valueInput}</h3>}
        {idade !== "" && `Você tem ${idade} anos.`}
      </h2>
    </>
  );
}
