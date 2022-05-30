import { BooleansActionsType } from "../actionsType/booleansActionsType";

export interface SetPickedFavoriteOn {
  type: BooleansActionsType.PICKED_FAVORITE_LOCATION_FLAG_ON;
}

export interface SetPickedFavoriteOff {
  type: BooleansActionsType.PICKED_FAVORITE_LOCATION_FLAG_OFF;
}

export interface SetFavoriteLocationOn {
  type: BooleansActionsType.SET_FAVORITE_LOCATION_ON;
}

export interface SetFavoriteLocationOff {
  type: BooleansActionsType.SET_FAVORITE_LOCATION_OFF;

}

export interface SetFavoritesPageActive {
  type: BooleansActionsType.FAVORITES_PAGE_ACTIVE;
}

export interface SetFavoritesPageInctive {
  type: BooleansActionsType.FAVORITES_PAGE_INACTIVE;
}

export type BooleansActions =
  | SetPickedFavoriteOn
  | SetPickedFavoriteOff
  | SetFavoriteLocationOn
  | SetFavoriteLocationOff
  | SetFavoritesPageActive
  | SetFavoritesPageInctive;
