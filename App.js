import React from "react";
import ReactDOM from "react-dom/client";

// This is a React Element
const heading = (
  <h1 id="heading" className="head">
    Hello JSX
  </h1>
);

// React Component
const Title = () => {
  return <h1>Hello Title</h1>;
};

const HeadingComponent = () => {
  return (
    <div>
      {heading}
      <Title />
      <h1>Hello from component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
