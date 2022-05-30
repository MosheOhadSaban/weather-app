import IBooleansState from "../../models/BooleansState";
import { BooleansActions } from "../actions/booleansActions";
import { BooleansActionsType } from "../actionsType/booleansActionsType";
import initBooleansState from "./../initState/initBooleansState";

const booleansReducer = (
  state: IBooleansState = initBooleansState,
  action: BooleansActions
): IBooleansState => {
  switch (action.type) {
    case BooleansActionsType.PICKED_FAVORITE_LOCATION_FLAG_ON:
      return { ...state, isFavoriteLocationPicked: true };
    case BooleansActionsType.PICKED_FAVORITE_LOCATION_FLAG_OFF:
      return { ...state, isFavoriteLocationPicked: false };
    case BooleansActionsType.FAVORITES_PAGE_ACTIVE:
      return { ...state, isFavoritesPage: true };
    case BooleansActionsType.FAVORITES_PAGE_INACTIVE:
      return { ...state, isFavoritesPage: false };
    case BooleansActionsType.SET_FAVORITE_LOCATION_ON:
      return { ...state, isFavoriteLocation: true };
    case BooleansActionsType.SET_FAVORITE_LOCATION_OFF:
      return { ...state, isFavoriteLocation: false };
    default:
      return state;
  }
};

export default booleansReducer;
