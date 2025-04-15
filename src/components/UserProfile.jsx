import profileStyle from "./UserProfile.module.css";

export default function () {
  return (
    <div className={profileStyle.container}>
      <div>
        <img
          className={profileStyle.userImg}
          src="https://www.w3schools.com/Tags/img_girl.jpg"
          alt="UserImage"
        />
      </div>
      <div className={profileStyle.text}>
        <h4>Kirthi Suresh</h4>
        <p>Indian Actress & Model</p>
      </div>
    </div>
  );
}
