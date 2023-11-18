import React from "react";
import "./Business.css";

const Business = () => {
  const businessData = {
    imgSource:
      "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
    name: "restaurant name",
    address: "1234 Florida Ave.",
    city: "Tampa",
    state: "FL",
    zipcode: "44512",
    category: "Italian",
    rating: 4.5,
    review_count: 86,
  };

  return (
    <div className="business">
      <div className="businessImage">
        <img src={businessData.imgSource} alt={businessData.name} />
      </div>
      <h2 className="businessName">{businessData.name}</h2>
      <div className="businessInfo">
        <div className="businessAddress">
          <p>{businessData.address}</p>
          <p className="businessCityStateZip">{`${businessData.city}, ${businessData.state} ${businessData.zipcode}`}</p>
        </div>
        <div className="businessDetails">
          <h3 className="businessCategory">{businessData.category}</h3>
          <h3 className="businessRating">{businessData.rating}</h3>
          <p className="businessReviewCount">{businessData.review_count}</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
