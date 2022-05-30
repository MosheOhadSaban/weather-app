import axios from "axios";

const API_KEY = "apikey=76Ac5Aw4luREgxPd7YGqxwJ02NGpZNZY&q=";

const GEOPOSITION_URL = `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?`;

export const getGeopositionAysnc = (lat: string, lon: string): Promise<any> =>
  axios.get(GEOPOSITION_URL + API_KEY + lat + "%2C" + lon);

