import axios from "axios";

const LOCATIONS_URL = `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?`;
const API_KEY = "apikey=76Ac5Aw4luREgxPd7YGqxwJ02NGpZNZY&q=";

export const getLocationsAsync = (locationQuery: string |null): Promise<any> =>
  axios.get(LOCATIONS_URL + API_KEY + locationQuery);



