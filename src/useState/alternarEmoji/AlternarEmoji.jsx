// ✅ Alternar Emoji
// Crie um componente chamado AlternarEmoji que:
// Comece exibindo o emoji 🙂.
// Ao clicar em um botão, alterne entre 🙂 e 😎.

import { useState } from "react";

export function AlternarEmoji() {
  const [emoji, setEmoji] = useState("🙂");
  function mudarEmoji() {
    setEmoji(emoji === "🙂" ? "😎" : "🙂");
  }

  return (
    <div>
      <p
        style={{
          fontSize: "100px",
          margin: 0,
          padding: 0,
        }}
      >
        {emoji}
      </p>
      <button style={{ marginBottom: 50 }} onClick={mudarEmoji}>
        Alterar Emoji
      </button>
    </div>
  );
}
