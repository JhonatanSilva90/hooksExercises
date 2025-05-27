// ✅ Alternar Mensagem
// Crie um componente AlternarMensagem que:
// Mostre a mensagem "Olá!".
// Ao clicar no botão, alterne entre "Olá!" e "Tchau!".

import { useState } from "react";

export function AlternarMensagem() {
  const [mensagem, setmensagem] = useState(true);
  function mudarTexto() {
    setmensagem(!mensagem);
  }
  return (
    <>
      <button onClick={mudarTexto}>
        {mensagem === true ? "Olá" : "Tchau!"}
      </button>
    </>
  );
}
