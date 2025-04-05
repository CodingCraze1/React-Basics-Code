import { useState } from "react";
import Toggle from "./components/Toggle";
import Counter from "./components/Counter";
import Wrapper from "./components/Wrapper";
import WrapperContent from "./components/WrapperContent";
import InputFieldValue from "./components/InputFieldValue";
import ControllerdComp from "./components/ControlledComp";
import HandleCheckbox from "./components/HandleCheckbox";
import HandleRadioButton from "./components/HandleRadioButton";
import HandleDropdown from "./components/HandleDropdown";
import MapFunction from "./components/MapFunction";
import ReuseComponent from "./components/ReuseComponent";

export default function MyApp() {
  let userData = [
    {
      id: 1,
      name: "Subham",
      age: 22,
      email: "subham@gmail.com",
    },
    {
      id: 2,
      name: "Deepak",
      age: 11,
      email: "deepak@gmail.com",
    },
    {
      id: 3,
      name: "Sandeep",
      age: 46,
      email: "sandeep@gmail.com",
    },
    {
      id: 4,
      name: "Sangita",
      age: 18,
      email: "sangita@gmail.com",
    },
    {
      id: 5,
      name: "Chanda",
      age: 25,
      email: "chanda@gmail.com",
    },
  ];

  return (
    <div>
      <ReuseComponent />
    </div>
  );
}
