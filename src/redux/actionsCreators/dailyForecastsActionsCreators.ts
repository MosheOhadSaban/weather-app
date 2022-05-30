import { Dispatch } from "redux";
import { getDailyForecastsAsync } from "../../api/Forecasts-API";
import { DailyForecastsActions } from "../actions/dailyForecastsActions";
import { DailyForecastsActionsType } from "../actionsType/dailyForecastsActionsType";

export const getDailyForecasts = (locationKey: string|null) => {
  return async (dispatch: Dispatch<DailyForecastsActions>) => {
    dispatch({
      type: DailyForecastsActionsType.GET_DAILY_FORECASTS_LOADING,
    });

    try {
      let { data } = await getDailyForecastsAsync(locationKey, true);
      data = data.DailyForecasts;
      dispatch({
        type: DailyForecastsActionsType.GET_DAILY_FORECASTS_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: DailyForecastsActionsType.GET_DAILY_FORECASTS_ERROR,
        payload: error.message,
      });
    }
  };
};
