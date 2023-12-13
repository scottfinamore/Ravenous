import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import BusinessList from "./Components/BusinessList";
import React, { useState } from "react";

function App() {
  const businesses = [
    {
      imgSource:
        "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
      name: "restaurant name1",
      address: "1 Florida Ave.",
      city: "Tampa",
      state: "FL",
      zipcode: "44512",
      rating: 4.5,
      review_count: 80,
    },
    {
      imgSource:
        "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
      name: "restaurant name2",
      address: "2 Florida Ave.",
      city: "Tampa",
      state: "FL",
      zipcode: "44512",
      rating: 4.5,
      review_count: 80,
    },
    {
      imgSource:
        "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
      name: "restaurant name3",
      address: "3 Florida Ave.",
      city: "Tampa",
      state: "FL",
      zipcode: "44512",
      rating: 4.5,
      review_count: 80,
    },
    {
      imgSource:
        "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
      name: "restaurant name4",
      address: "4 Florida Ave.",
      city: "Tampa",
      state: "FL",
      zipcode: "44512",
      rating: 4.5,
      review_count: 80,
    },
    {
      imgSource:
        "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
      name: "restaurant name5",
      address: "5 Florida Ave.",
      city: "Tampa",
      state: "FL",
      zipcode: "44512",
      rating: 4.5,
      review_count: 80,
    },
    {
      imgSource:
        "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
      name: "restaurant name6",
      address: "6 Florida Ave.",
      city: "Tampa",
      state: "FL",
      zipcode: "44512",
      rating: 4.5,
      review_count: 80,
    },
  ];

  const [busniesses, setBusinesses] = useState([]);

  return (
    <div className="App">
      <header>ravenous</header>
      <SearchBar setBusinesses={setBusinesses} />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
