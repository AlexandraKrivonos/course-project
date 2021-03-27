import React from "react";

const FanficCard = ({ fanfics }) => {
  return (
    <div className="form">
      {fanfics.map((fanfic) => {
        return (
          <div className="wrapperCenter">
            <h2 className="title">{fanfic.title}</h2>
            <div className="genre">Genre: {fanfic.genre}</div>
            <div className="auther">Author: {fanfic.authorName}</div>
            <div className="shortDescription">
              Description: {fanfic.shortDescription}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FanficCard;
