import React, { useState } from "react";

const Header = () => {
  const [number, setNumber] = useState(0);
  const increment = () => setNumber(number + 1);
  const decrement = () => setNumber(number - 1);
  return (
    <>
      <p>State is a number {number}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </>
  );
};

export default Header;
