import PassFunAsProp from "./PassFunAsProp";

export default function PassFunAsPropParent() {
  const displayName = (name) => {
    alert(name);
  };
  return (
    <div>
      <h1>Passing function as prop</h1>
      <PassFunAsProp displayName={displayName} name="Sachin" />
      <PassFunAsProp displayName={displayName} name="Ritesh" />
      <PassFunAsProp displayName={displayName} name="Bhawna" />
      <PassFunAsProp displayName={displayName} name="Aniket" />
    </div>
  );
}
