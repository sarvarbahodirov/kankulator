import { useState } from "react";
import "../App.css";

function Counter() {
  const [count, setCount] = useState("");

  function handleClick(value: string) {
    setCount(count + value);
  }

  function calculate() {
    try {
      setCount(eval(count).toString());
    } catch {
      setCount("Error");
    }
  }

  function clear() {
    setCount("");
  }

  return (
    <div className="container">
      <div className="calculator">
        <input
          type="text"
          value={count}
          readOnly
          className="display"
        />

        <div className="buttons">
          <button onClick={clear}>C</button>
          <button onClick={() => handleClick("/")}>/</button>
          <button onClick={() => handleClick("*")}>*</button>
          <button onClick={() => handleClick("-")}>-</button>

          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("+")}>+</button>

          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={calculate}>=</button>

          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("0")}>0</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;6