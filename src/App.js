import { useState } from "react";
import styled from "styled-components";
import StyledComponent from "./components/StyledComponent";
import UseRefExample from "./components/UseRefExample";
import PassFunAsPropParent from "./components/PassFunAsPropParent";

export default function MyApp() {
  return (
    <div>
      <PassFunAsPropParent />
    </div>
  );
}
