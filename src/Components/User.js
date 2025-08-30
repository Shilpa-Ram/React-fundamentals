import { useState } from "react";

const User = ({name}) => {
    const [location, setLocation] = useState("Bangalore");
    const [contact, setContact] = useState("Jaanu");
    const [count, setCount] = useState(0);
    return (
         <div>
        <h1>This is a User Functional Component</h1>
          <h2> Name: {name}</h2>
         <h2> Location: {location}</h2>
          <h2> Contact person: {contact}</h2>
          <h3> Count: {count}   </h3>
            <button onClick={() => setCount(count + 1)}>Count++</button>
        </div>
    );
}

export default User;