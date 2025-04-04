import { useState } from "react";

function Toggle() {
  const [display, setDisplay] = useState(true);
  let [value, setValue] = useState("Show User");

  // if (display) setValue("Hide User");
  // else setValue("Show User");

  function changeState() {
    setDisplay(!display);
    if (display) setValue("Show User");
    else setValue("Hide User");
  }
  return (
    <div>
      <br />
      <h1>Toggle Component Example</h1>
      <button onClick={changeState}>{value}</button>
      {display ? <h1>Subham Kumar</h1> : null}
    </div>
  );
}

export default Toggle;
