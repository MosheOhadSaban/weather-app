import axios from "axios";

const FORECAST_URL =
  "http://dataservice.accuweather.com/forecasts/v1/daily/5day/";

const API_KEY = "?apikey=76Ac5Aw4luREgxPd7YGqxwJ02NGpZNZY";

const METRIC_VALUES_URL = "&metric=true";

export const getDailyForecastsAsync = (
  locationQuery: string |null,
  isMeticValues: boolean
): Promise<any> => {
  if (isMeticValues)
    return axios.get(
      FORECAST_URL + locationQuery + API_KEY + METRIC_VALUES_URL
    );

  return axios.get(FORECAST_URL + locationQuery + API_KEY);
};


