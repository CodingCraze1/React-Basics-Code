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

export default function MyApp() {
  return (
    <div>
      <HandleRadioButton />
      <HandleDropdown />
      <MapFunction />
    </div>
  );
}
