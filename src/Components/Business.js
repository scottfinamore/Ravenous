import React from "react";
import "./Business.css";

const Business = (props) => {
  const { businessData } = props;

  return (
    <div className="business">
      <div className="businessImage">
        <img src={businessData.imgSource} alt={businessData.name} />
      </div>
      <h2 className="businessName">{businessData.name}</h2>
      <div className="businessInfo">
        <div className="businessAddress">
          <p>{businessData.address}</p>
          <p className="businessCity">{`${businessData.city}`}</p>
          <p className="businessStateZip">{`${businessData.state} ${businessData.zipcode}`}</p>
        </div>
        <div className="businessDetails">
          <h3 className="businessCategory">{businessData.category}</h3>
          <h3 className="businessRating">{businessData.rating} stars</h3>
          <p className="businessReviewCount">
            {businessData.review_count} reviews
          </p>
        </div>
      </div>
    </div>
  );
};

export default Business;
