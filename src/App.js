import { useState } from "react";
import Toggle from "./components/Toggle";
import Counter from "./components/Counter";
import Wrapper from "./components/Wrapper";
import WrapperContent from "./components/WrapperContent";
import InputFieldValue from "./components/InputFieldValue";

export default function MyApp() {
  return (
    <div>
      <h1>Getting the value from input fields</h1>
      <InputFieldValue />
    </div>
  );
}
