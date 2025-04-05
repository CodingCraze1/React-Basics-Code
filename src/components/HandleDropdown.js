import { useState } from "react";
import Dropdown from "./Dropdown.css";

export default function HandleDropdown() {
  const [city, setCity] = useState("Patna");

  return (
    <div className="dropdown-container">
      <h1 className="heading">Handling Dropdown in React</h1>
      <h2>Select Your City</h2>
      <select onChange={(e) => setCity(e.target.value)} defaultValue="Patna">
        <option value="Jaipur">Jaipur</option>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Patna">Patna</option>
        <option value="Kolkata">Kolkata</option>
      </select>
      <h2>Selected City is: {city}</h2>
    </div>
  );
}
