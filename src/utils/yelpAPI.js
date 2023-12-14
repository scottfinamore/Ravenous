const apiKey =
  "YP5Bqa0p0BEWalVzak0hZ9n9zVNjvYWS4KjfjCNQlVDKGRi1kcQ7s2fnDC6nXJn398PnmVVXE_XqmZH3ewOUAGDdaXPsnmsgc1-DXdj7GmBYTeDBARjISS20TAF5ZXYx";
const apiUrl = "/api/businesses/search";

const searchBusinesses = async (searchTerms, location, sortBy) => {
  const url = `${apiUrl}?term=${searchTerms}&location=${location}&sort_by=${sortBy}`;
  // const url = `https://cors-anywhere.herokuapp.com/api.yelp.com/v3/businesses/search?term=pizza&location=Cleveland&sort_by=best_match`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Yelp API request failed with status: ${response.status}`
      );
    }

    const data = await response.json();
    console.log("data", data);
    const businesses = data.businesses.map((business) => ({
      imageURL: business.image_url,
      id: business.id,
      name: business.name,
      rating: business.rating,
      reviewCount: business.review_count,
      address: business.location.address1,
      city: business.location.city,
      state: business.location.state,
      zip: business.location.zip_code,
      category: business.categories[0].title,
    }));

    return businesses;
  } catch (error) {
    console.error("Error fetching data from Yelp API:", error);
    throw error;
  }
};

export default searchBusinesses;
