// ✅ Contador de Cliques no Botão
// Crie um componente ContadorDeCliques que:
// Mostre quantas vezes o botão foi clicado.
// Cada clique aumenta o número em 1.

import { useState } from "react";

export function ContadorDeCliques() {
  const [cliques, setCliques] = useState(0);
  function contarCliques() {
    setCliques(cliques + 1);
  }
  return (
    <>
      <button onClick={contarCliques}>Clique Aqui</button>
      <p>Você clicou: {cliques}</p>
    </>
  );
}
