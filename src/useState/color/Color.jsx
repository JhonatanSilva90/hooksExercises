import { useState } from "react";

export function ToggleColor() {
  const [cor, setCor] = useState("red");

  return (
    <div style={{ backgroundColor: cor, padding: "20px" }}>
      <button onClick={() => setCor(cor === "red" ? "green" : "red")}>
        Alternar Cor
      </button>
    </div>
  );
}
