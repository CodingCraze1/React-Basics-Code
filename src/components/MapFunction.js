export default function MapFunction() {
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
      <h1>Using Map() to iterate array of objects</h1>
      <table border="1" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>EMAIL</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
