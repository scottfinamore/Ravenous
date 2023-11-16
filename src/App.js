import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import BusinessList from "./Components/BusinessList";

function App() {
  return (
    <div className="App">
      <header>ravenous</header>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
