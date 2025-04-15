import styled from "styled-components";

export default function StyledComponent() {
  const H1 = styled.h1`
    color: red;
    background: lightblue;
    padding: 10px;
    border-radius: 8px;
  `;

  const AnotherH1 = styled.h1({
    color: "green",
    background: "lightcyan",
    padding: "10px",
    borderRadius: "8px",
  });
  return (
    <div>
      <H1>This is Styled Component</H1>
      <AnotherH1>Another way to create a Styled Component</AnotherH1>
    </div>
  );
}
