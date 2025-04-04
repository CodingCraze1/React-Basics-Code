import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [rcount, setRCount] = useState(10);

  return (
    <div>
      <h1>Welcome to Counter app</h1>
      <h1>"Count : {count}"</h1>
      <h1>"rCount : {rcount}"</h1>
      <button
        onClick={() => {
          if (count < 10) setCount(count + 1);
          else setCount(0);
          if (rcount > 0) setRCount(rcount - 1);
          else setRCount(10);
        }}
      >
        Update Counter
      </button>
    </div>
  );
}
