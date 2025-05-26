import { useState } from "react";

export function Count() {
  const [count, setCount] = useState(0);
  function add() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  return (
    <>
      <p>Valor: {count}</p>
      <button onClick={decrease}>-</button>
      <button onClick={add}>+</button>
    </>
  );
}
