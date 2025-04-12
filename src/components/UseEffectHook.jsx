import { useEffect, useState } from "react";

export default function UseEffectHook() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);

  function demo() {
    console.log("demo called...");
  }

  useEffect(() => {
    demo();
  }, [counter, data]);

  return (
    <div>
      <h1>Use Effect Hook in React-Js</h1>
      <button onClick={() => setCounter(counter + 1)}>Counter {counter}</button>
      <button onClick={() => setData(data + 1)}>Data {data}</button>
    </div>
  );
}
