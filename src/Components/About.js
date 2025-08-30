import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <User name={"Shilpa (Functional component)"}/>

      <UserClass name={"Shilpa (Class component)"} location={"bangalore"} />
    </div>
  );
};

export default About;
