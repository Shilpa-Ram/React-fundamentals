import React from "react";
class UserClass extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
        location: props.location,
        contact: "Jaanu",
        count: 0
    };
}

async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Shilpa-Ram");
    const json = await data.json();
    console.log(json);
    this.setState({
        contact: json.login
    }); 

}
componentDidUpdate() {
    // console.log("Component did update");
}
componentWillUnmount() {
    // console.log("Component will unmount");
}

    render() {
        const {name} = this.props;
        const {location, contact, count} = this.state;
    return (
        <div className="user-class">
        <h1>This is a User Class Component</h1>
        <h2> Name: {name}</h2>
         <h2> Location: {location}</h2>
          <h2> Contact person: {contact}</h2>
          <h3> Count: {count}   </h3>
            <button onClick={() => {
                this.setState({
                    count: this.state.count + 1
                });
            }}>Count++</button>
          </div>
    );
};
}

export default UserClass;