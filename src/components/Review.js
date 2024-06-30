import React from "react";
import "../styles/App.css";
const Review = ({ name, id, job, image, text }) => {
  return (
    <div className="review">
      {/* <div className="p-dtls"> */}
      {/* <div> */}
      <img src={image} alt={name} className="person-img" />
      {/* </div> */}
      {/* <div> */}
      <div className="author" id={"author" + id}>
        <p> {name} </p>
      </div>
      <div className="job">
        <p> ~{job} </p>
      </div>
      {/* </div> */}
      {/* </div> */}
      <div className="info">
        <p> {text} </p>
      </div>
    </div>
  );
};

export default Review;
