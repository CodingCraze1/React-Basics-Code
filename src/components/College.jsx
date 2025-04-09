import "./College.css";

//This Component is Sub-Component of NestedLooping component
export default function College({ college }) {
  return (
    <div className="college-container">
      <h2>College Name: {college.name}</h2>
      <ul>
        <li>Location : {college.location}</li>
        <li>Website: {college.website}</li>
      </ul>
      <Student student={college.student} />
    </div>
  );
}

export function Student({ student }) {
  return (
    <div>
      <h2>Student Details</h2>
      {student.map((student) => (
        <ul>
          <li>Name: {student.name}</li>
          <li>Age: {student.age}</li>
          <li>Email: {student.email}</li>
        </ul>
      ))}
    </div>
  );
}
