import React from "react";
import Business from "./Business.js";
import "./BusinessList.css";

const BusinessList = (props) => {
  const { businesses } = props;
  console.log("buinesses", businesses);

  return (
    <div className="businessListWrapper">
      <ul className="businessList">
        {businesses.map((business, index) => (
          <Business key={business.id} businessData={business} />
        ))}
      </ul>
    </div>
  );
};

export default BusinessList;
