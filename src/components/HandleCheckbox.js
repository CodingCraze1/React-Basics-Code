import { useState } from "react";

export default function HandleCheckbox() {
  // defining one state to store the values of checkbox
  const [skills, setSkills] = useState([]);

  //defining function to change the values of checkbox and store them into the useState
  function handleSkills(event) {
    console.log(event.target.value);
    console.log(event.target.checked);
    if (event.target.checked) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills([...skills.filter((item) => item != event.target.value)]);
    }
  }

  return (
    <div>
      <h1>Handling Checkbox in React</h1>
      <div>
        <h2>Select your Favorite Subject</h2>
        <label>
          <input type="checkbox" onChange={handleSkills} value="JavaScript" />
          JavaScript
        </label>
        <br />
        <br />
        <label>
          <input type="checkbox" onChange={handleSkills} value="Python" />
          Python
        </label>
        <br />
        <br />
        <label>
          <input type="checkbox" onChange={handleSkills} value="SpringBoot" />
          SpringBoot
        </label>
        <br />
        <br />
        <label>
          <input type="checkbox" onChange={handleSkills} value="Hibernate" />
          Hibernate
        </label>
        <br />
        <br />
      </div>
      <h2>{skills.toString()}</h2>
    </div>
  );
}
