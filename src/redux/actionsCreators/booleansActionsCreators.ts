import { BooleansActionsType } from "../actionsType/booleansActionsType";
import { BooleansActions } from "./../actions/booleansActions";

export const setFavoritesPageActive = (): BooleansActions => {
  const action: BooleansActions = {
    type: BooleansActionsType.FAVORITES_PAGE_ACTIVE,
  };

  return action;
};

export const setFavoritesPageInactive = (): BooleansActions => {
  const action: BooleansActions = {
    type: BooleansActionsType.FAVORITES_PAGE_INACTIVE,
  };
  return action;
};

export const setFavoriteLocationOn = (): BooleansActions => {
  const action: BooleansActions = {
    type: BooleansActionsType.SET_FAVORITE_LOCATION_ON,
  };
  return action;
};

export const setFavoriteLocationOff = (): BooleansActions => {
  const action: BooleansActions = {
    type: BooleansActionsType.SET_FAVORITE_LOCATION_OFF,
  };
  return action;
};

export const SetPickedFavoriteOn = (): BooleansActions => {
  const action: BooleansActions = {
    type: BooleansActionsType.PICKED_FAVORITE_LOCATION_FLAG_ON,
  };
  return action;
};
export const SetPickedFavoriteOff = (): BooleansActions => {
  const action: BooleansActions = {
    type: BooleansActionsType.PICKED_FAVORITE_LOCATION_FLAG_OFF,
  };
  return action;
};
