export default function PassFunAsProp({ displayName, name }) {
  return (
    <div>
      <button
        onClick={() => {
          displayName(name);
        }}
      >
        Display Name
      </button>
    </div>
  );
}
