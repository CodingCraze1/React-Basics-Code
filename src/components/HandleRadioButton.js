import { useState } from "react";

export default function HandleRadioButton() {
  const [gender, setGender] = useState("Female");
  return (
    <div className="radio-container">
      <h1 className="heading">Handling Radio Button in React</h1>
      <h2>Select Gender</h2>
      <input
        type="radio"
        onChange={(e) => setGender(e.target.value)}
        name="gender"
        value="Male"
        id="male"
      />
      <label htmlFor="male">Male</label>

      <input
        type="radio"
        onChange={(e) => setGender(e.target.value)}
        checked
        name="gender"
        value="Female"
        id="female"
      />
      <label htmlFor="female">Female</label>
      <h2>Selected Gender is: {gender}</h2>
    </div>
  );
}
