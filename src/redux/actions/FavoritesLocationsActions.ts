import IFavoritesLocation from "../../models/FavoritesLocation";
import { FavoritesLocationActionsType } from "../actionsType/FavoritesLocationsActionsType";

export interface GetFavoriteLocationConditionsLoading {
  type: FavoritesLocationActionsType.GET_FAVORITE_LOCATION_CONDITIONS_lOADING;
}
export interface GetFavoriteLocationConditionsSuccess {
  type: FavoritesLocationActionsType.GET_FAVORITE_LOCATION_CONDITIONS_SUCCESS;
  payload: IFavoritesLocation;
}

export interface GetFavoriteLocationConditionsError {
  type: FavoritesLocationActionsType.GET_FAVORITE_LOCATION_CONDITIONS_ERROR;
  payload: string | null;
}

export type FavoriteLocationActions =
  | GetFavoriteLocationConditionsLoading
  | GetFavoriteLocationConditionsSuccess
  | GetFavoriteLocationConditionsError;
