import "./ComponentReuse.css";

export default function ReuseComponent() {
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
      {userData.map((user) => (
        <div key={user.key}>
          <Component data={user} />
        </div>
      ))}
    </div>
  );
}

function Component({ data }) {
  return (
    <div className="reusable-component">
      <h3 className="name">Name: {data.name}</h3>
      <h3 className="age">Name: {data.age}</h3>
      <h3 className="email">Name: {data.email}</h3>
    </div>
  );
}
