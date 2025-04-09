import College from "./College";

export default function NestedLooping() {
  const collegeData = [
    {
      name: "Cimage College",
      location: "Patna",
      website: "www.cimage-patna.in",
      student: [
        {
          name: "Keshav Jha",
          age: "26",
          email: "keshav123@gmail.com",
        },
        {
          name: "Sharen Verma",
          age: "24",
          email: "weakindwomen@gmail.com",
        },
      ],
    },
    {
      name: "Maharaja College",
      location: "Jaipur",
      website: "www.maharajaclg.gov.in",
      student: [
        {
          name: "Keshav Jha",
          age: "26",
          email: "keshav123@gmail.com",
        },
        {
          name: "Sharen Verma",
          age: "24",
          email: "weakindwomen@gmail.com",
        },
      ],
    },
    {
      name: "Sri Shankar College",
      location: "Sasaram",
      website: "www.srishankarclg.gov.in",
      student: [
        {
          name: "Keshav Jha",
          age: "26",
          email: "keshav123@gmail.com",
        },
        {
          name: "Sharen Verma",
          age: "24",
          email: "weakindwomen@gmail.com",
        },
      ],
    },
    {
      name: "Subodh College",
      location: "Jaipur",
      website: "www.subhodhclg.com",
      student: [
        {
          name: "Keshav Jha",
          age: "26",
          email: "keshav123@gmail.com",
        },
        {
          name: "Sharen Verma",
          age: "24",
          email: "weakindwomen@gmail.com",
        },
      ],
    },
  ];
  return (
    <div>
      <h1>Nested Looping in React</h1>
      {collegeData.map((college, index) => (
        <div key={index}>
          <College college={college} />
        </div>
      ))}
    </div>
  );
}
