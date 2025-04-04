export default function Wrapper({ children, textColor = "green" }) {
  let style = {
    color: textColor,
    border: "2px solid #a2a2a2",
    margin: "10px",
    width: "300px",
    padding: "10px",
  };
  return <div style={style}>{children}</div>;
}
