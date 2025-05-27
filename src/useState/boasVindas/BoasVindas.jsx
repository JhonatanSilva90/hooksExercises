// ✅ Mostrar Mensagem de Boas-vindas
// Crie um componente BoasVindas que:
// Tenha um botão “Entrar”.
// Ao clicar, mostre a mensagem “Bem-vindo, usuário!”.

import { useState } from "react";

// export function BoasVindas() {
//   const [mensagen, setMensagen] = useState("");
//   function bemVindo() {
//     setMensagen("Bem vindo, usuário");
//   }
//   return (
//     <>
//       <button onClick={bemVindo}>Entrar</button>
//       <p>{mensagen}</p>
//     </>
//   );
// }

// Ou

export function BoasVindas() {
  const [mensagen, setMensagen] = useState(false);
  function bemVindo() {
    setMensagen(!mensagen);
  }
  return (
    <>
      <button onClick={bemVindo}>
        {mensagen === true ? "Ocultar mensagem" : "Mostrar mensagem"}
      </button>
      {mensagen === true && <p>Bem vindo, usuário</p>}
    </>
  );
}
