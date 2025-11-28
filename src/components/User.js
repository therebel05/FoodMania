import React from "react";

class User extends React.Component {
  constructor() {
    super();
    console.log("Child Constructor");

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Child Did Mount");
  }

  render() {
    console.log("Child Render");

    return (
      <div>
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default User;
