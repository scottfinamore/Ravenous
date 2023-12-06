const apiKey = x9VDGwRQLeBeDWDhdcCCJauQp4a-7Wu9cGlob5XR1AGlGQms4QzqbbFhB_h-QWRdiUt6scYhM7JvKW_KN1fCGTxd9rsPq07foXz6k4hT6bNIGFZDqOfXY5KHtbFvZXYx;
const apiUrl = 'https://api.yelp.com/v3/businesses/search';

const searchBusinesses = async (searchTerms, location, sortBy) => {
    const url = `${apiUrl}?term=${searchTerms}&location=${location}&sort_by=${sortBy}`;
    
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Yelp API request failed with status: ${response.status}`);
        }

        const data = await response.json();

        const businesses = data.businesses.map(business => ({
            id: business.id,
            name: business.name,
            rating: business.rating,
            reviewCount: business.review_count
        }))

        return businesses;
    } catch (error) {
        console.error('Error fetching data from Yelp API:', error);
        throw error;
    }
};

export default searchBusinesses;