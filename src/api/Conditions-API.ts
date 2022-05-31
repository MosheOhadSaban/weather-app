import axios from "axios";

const CURRENT_CONDITTIONS_URL =
  "https://dataservice.accuweather.com/currentconditions/v1/";
const API_KEY = "?apikey=76Ac5Aw4luREgxPd7YGqxwJ02NGpZNZY";

export const getCurrentConditionsAsync= (
  locationKey: string |null
): Promise<any> =>
  axios.get(CURRENT_CONDITTIONS_URL + locationKey + API_KEY);


