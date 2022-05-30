import IDayForecast from "../../models/DayForecast";
import { DailyForecastsActionsType } from "../actionsType/dailyForecastsActionsType";

export interface GetDailyForecastsLoadingAction {
  type: DailyForecastsActionsType.GET_DAILY_FORECASTS_LOADING;
}

export interface GetDailyForecastsSuccessAction {
  type: DailyForecastsActionsType.GET_DAILY_FORECASTS_SUCCESS;
  payload: IDayForecast[];
}

export interface GetDailyForecastsErrorAction {
  type: DailyForecastsActionsType.GET_DAILY_FORECASTS_ERROR;
  payload: string | null;
}

export type DailyForecastsActions =
  | GetDailyForecastsLoadingAction
  | GetDailyForecastsSuccessAction
  | GetDailyForecastsErrorAction;
