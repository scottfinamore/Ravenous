import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar';
import BusinessList from './Components/BusinessList';

function App() {
  return (
    <div className="App">
      <BusinessList />
      <SearchBar />
    </div>

  );
}

export default App;
