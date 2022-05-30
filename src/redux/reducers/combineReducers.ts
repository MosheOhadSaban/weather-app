import { combineReducers } from "redux";
import booleansReducer from "./booleansReducer";
import currentConditionsReducer from "./currentConditionsReducer";
import dailyForecastsReducer from "./dailyForecastsReducer";
import currentLocationReducer from "./currentLocationReducer";
import locationsReducer from "./locationsReducer";
import favoritesLocationsReducer from "./favoritesLocationsReducer";




const reducers = combineReducers({
  location: locationsReducer,
  currentLocation: currentLocationReducer,
  currentConditions: currentConditionsReducer,
  dailyForecasts: dailyForecastsReducer,
  favoritesLocations:favoritesLocationsReducer,
  booleans: booleansReducer,


});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
