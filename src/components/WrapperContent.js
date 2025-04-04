import Wrapper from "./Wrapper";

export default function WrapperContent() {
  return (
    <div>
      <h1>Passing JSX into the component</h1>
      <Wrapper textColor="magenta">
        <h1 style={{ margin: "0px" }}>Hi, Subham Kumar</h1>
      </Wrapper>

      <Wrapper textColor="gold">
        <h1 style={{ margin: "0px" }}>Hi, Nimrat Kaur</h1>
        <p style={{ margin: "0px", color: "cyan" }}>Where are you from..!</p>
      </Wrapper>
    </div>
  );
}
