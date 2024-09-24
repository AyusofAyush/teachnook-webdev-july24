import React from "react";
import "./Card.scss";

function Card({
  cardImg = null,
  caption = "Sample",
  cardTitle = "PostCard",
  cardDesc = "",
}) {
  return (
    <div className="flex column card-parent">
      <div className="flex center card-img">
        {cardImg && (
          <img className="card-img-origin" src={cardImg} alt={caption} />
        )}
      </div>
      <p>{caption}</p>
      <h3>{cardTitle}</h3>
      <h4>{cardDesc}</h4>
    </div>
  );
}

export default Card;
