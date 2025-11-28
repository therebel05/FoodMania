import React from "react";
import { useParams } from "react-router-dom";

class RestaurantDetails extends React.Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <h1>Hi Welcome to the restaurant!!</h1>
        <p>{this.props.params.id}</p>
      </div>
    );
  }
}

export default function RestaurantDetailsWrapper() {
  const params = useParams();
  return <RestaurantDetails params={params} />;
}
