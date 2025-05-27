// ✅ Texto em Caixa Alta
// Crie um componente TextoCaixaAlta que:
// Possua um input de texto.
// Mostre abaixo o texto em caixa alta (ex: “oi” vira “OI”).

import { useState } from "react";

export function TextoCaixaAlta() {
  const [text, setText] = useState("");
  function colocarTextoCaixaAlta(e) {
    setText(e.target.value.toUpperCase());
  }
  return (
    <>
      <input
        type="text"
        placeholder="Digite Aqui"
        onChange={colocarTextoCaixaAlta}
      />
      <p>Seu texto em caixa alta ficaria: {text}</p>
    </>
  );
}
