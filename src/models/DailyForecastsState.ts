import DayForecast from "./DayForecast";

export default interface IDailyForecastsState {
  isLoading: boolean;
  data: DayForecast[];
  error: string | null;
}
