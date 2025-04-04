import { useState } from "react";

export default function ControllerdComp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>Controlled Component in React</h1>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />
        <br />
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
        />
        <br />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        <br />
        <br />
        <button>Submit</button>
        <button
          onClick={() => {
            setName("");
            setEmail("");
            setPassword("");
          }}
        >
          Clear
        </button>
        <br />
        <br />
      </div>
      <div>
        <h2>{name}</h2>
        <h2>{email}</h2>
        <h2>{password}</h2>
      </div>
    </div>
  );
}
