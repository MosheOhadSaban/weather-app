import IFavoritesLocation from "./FavoritesLocation";

export default interface IFavoritesLocationsState {
  isLoading: boolean;
  data: IFavoritesLocation[];
  error: string | null;
}
