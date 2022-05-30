import ICurrentConditions from "./CurrentConditions";

export default interface ICurrentConditionsState {
  isLoading: boolean;
  data: ICurrentConditions[] ;
  error: null | string;
}
