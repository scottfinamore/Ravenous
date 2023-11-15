import react from 'react';
import BusinessList from './BusinessList.js';
import './SearchBar.css';

const SearchBar = () => {
     

        const searchBarOptions = {
            'Best Match':'https://api.yelp.com/v3/businesses/search?sort_by=best_match&limit=20',
            'Rating':'https://api.yelp.com/v3/businesses/search?sort_by=rating&limit=20',
            'Review Count':'https://api.yelp.com/v3/businesses/search?sort_by=review_count&limit=20'
        }

        const newListItem = Object.keys(searchBarOptions).map((key) => (
            <li key={key}>{searchBarOptions[key]}</li>
        ))
        
        return (
        <div>
            <form className='searchBusiness'>
                <input type='search' placeholder='Search Businesses'></input>
                <input type='search' placeholder='Where?'></input>
                <button type='submit'>Let's Go</button>
            </form>
            <div>
                <ul>{newListItem}</ul>
            </div>
        </div>
        
        )   
}
// scotty, you were missing this export, you need to export components
export default SearchBar;