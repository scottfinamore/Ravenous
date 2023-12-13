import React, { useState } from "react";
import BusinessList from "./BusinessList.js";
import "./SearchBar.css";

const searchBarOptions = {
  "Best Match": "best_match",
  "Highest Rating": "highest_rating",
  "Review Count": "review_count",
};

const SearchBar = (props) => {
  const { handleBusinessesRendered } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [selectedSortOption, setSelectedSortOption] = useState("best_match");

  const handleSortOptionClick = (newSortOption) => {
    console.log("Clicked on:", newSortOption);
    setSelectedSortOption(newSortOption);
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const newListItem = () => {
    return Object.keys(searchBarOptions).map((sortByOption) => {
      let sortByOptionValue = searchBarOptions[sortByOption];
      const isSelected = sortByOptionValue === selectedSortOption;
      return (
        <li key={sortByOptionValue} className={isSelected ? "selected" : ""}>
          <span onClick={() => handleSortOptionClick(sortByOptionValue)}>
            {sortByOption}
          </span>
        </li>
      );
    });
  };

  const handleButtonClick = async () => {
    // console.log(
    //   `Searching for ${searchTerm}, ${location}, ${selectedSortOption}`
    // );

    if (!searchTerm.length || !location.length) {
      alert("add values to fields");
      return;
    }
    // function handler goes here
    handleBusinessesRendered(searchTerm, location, selectedSortOption);
  };

  // console.log("Selected Sort Option:", selectedSortOption);

  return (
    <div className="searchBarStyles">
      <div>
        <ul>{newListItem()}</ul>
      </div>
      <div className="searchBusiness">
        <input
          type="search"
          placeholder="Search Businesses"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
        <input
          type="search"
          placeholder="Where?"
          value={location}
          onChange={handleLocationChange}
        />
        <button type="submit" onClick={handleButtonClick}>
          Let's Go
        </button>
      </div>
    </div>
  );
};
export default SearchBar;
