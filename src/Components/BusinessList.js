import React from "react";
import Business from "./Business.js";
import "./BusinessList.css";

const BusinessList = (props) => {
  const { businesses } = props;

  return (
    <div className="businessListWrapper">
      <div className="businessList">
        {businesses.map((business, index) => (
          <Business key={index} businessData={business} />
        ))}
      </div>
    </div>
  );
};

export default BusinessList;
