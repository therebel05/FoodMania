// const RestaurantCard = ({ name, rating, time, cuisines, address }) => {
//   return (
//     <div className="res-card">
//       <img
//         src="https://images.getrecipekit.com/20221130023757-untitled-design-12-3.png?aspect_ratio=16:9&quality=90&"
//         alt="chowmin image"
//       />
//       <h3>{name}</h3>
//       <p>
//         Rating: {rating} : {time} mins
//       </p>
//       <p>{cuisines}</p>
//       <p>{address}</p>
//     </div>
//   );
// };
import React from "react";

class RestaurantCard extends React.Component {
  render() {
    const { name, rating, time, cuisines, address } = this.props;

    return (
      <div className="res-card">
        <img
          src="https://images.getrecipekit.com/20221130023757-untitled-design-12-3.png?aspect_ratio=16:9&quality=90&"
          alt="chowmin image"
        />
        <h3>{name}</h3>
        <p>
          Rating: {rating} : {time} mins
        </p>
        <p>{cuisines}</p>
        <p>{address}</p>
      </div>
    );
  }
}

export default RestaurantCard;
