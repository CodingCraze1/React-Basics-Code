import { useRef, useState } from "react";

export default function UseRefExample() {
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.focus();
    inputRef.current.style.color = "blue";
    inputRef.current.style.height = "28px";
    inputRef.current.style.width = "200px";
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Enter Your Name" />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
