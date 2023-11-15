import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar';
import BusinessList from './Components/BusinessList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>  
      </header>

      <BusinessList />
      <SearchBar />
    </div>

  );
}

export default App;
