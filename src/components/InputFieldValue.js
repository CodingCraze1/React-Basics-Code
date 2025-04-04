import { useState } from "react";

export default function InputFieldValue() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="Enter Your Name"
      />
      <button onClick={() => setInputValue("")}>Clear</button>
      <h2>{inputValue}</h2>
    </div>
  );
}
