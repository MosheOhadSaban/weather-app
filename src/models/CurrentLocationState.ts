import ILocation from "./Location";

export default interface ICurrentLocationState {
  isLoading: boolean;
  data: ILocation;
  error: string | null;
}
