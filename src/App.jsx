import { useCallback, useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Function execute...");
    setCount(count + 1);
  }, [count]);

  const result = useMemo(() => {
    console.log("Calculating result...");
    return value1 + value2;
  }, [value1, value2]);

  return (
    <div className="container">
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increase Count</button>

      <p>Result: {result}</p>
      <div className="button-wrapper">
        <button onClick={() => setValue1(value1 + 1)}>Increase Value 1</button>
        <button onClick={() => setValue2(value2 + 1)}>Increase Value 2</button>
      </div>
    </div>
  );
}

export default App;
