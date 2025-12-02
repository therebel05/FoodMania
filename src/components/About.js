// const About = () => {
//   return (
//     <div>
//       <h1>About us page</h1>
//     </div>
//   );
// };

import React from "react";
import User from "./User";

class About extends React.Component {
  constructor() {
    super();

    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Did Mount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About us page</h1>
        <User />
      </div>
    );
  }
}

export default About;
