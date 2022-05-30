import ILocation from "./Location";

export default interface ILocationState {
  isLoading: boolean;
  data: ILocation[];
  error: null | string;
}
