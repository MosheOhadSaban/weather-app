import { DailyForecastsActions } from "../actions/dailyForecastsActions";
import { DailyForecastsActionsType } from "../actionsType/dailyForecastsActionsType";
import IDailyForecastsState from "./../../models/DailyForecastsState";
import initDailyForecastsState from "./../initState/initDailyForecastsState";

const dailyForecastsReducer = (
  state: IDailyForecastsState = initDailyForecastsState,
  action: DailyForecastsActions
): IDailyForecastsState => {
  switch (action.type) {
    case DailyForecastsActionsType.GET_DAILY_FORECASTS_LOADING:
      return { ...state, isLoading: true };
    case DailyForecastsActionsType.GET_DAILY_FORECASTS_SUCCESS:
      state.data = action.payload;
      return { ...state, isLoading: false, data: [...state.data] };
    case DailyForecastsActionsType.GET_DAILY_FORECASTS_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default dailyForecastsReducer;
