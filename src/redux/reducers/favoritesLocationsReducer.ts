import IFavoritesLocationsState from "../../models/FavoritesLocationState";
import { FavoriteLocationActions } from "../actions/FavoritesLocationsActions";
import { FavoritesLocationActionsType } from "../actionsType/FavoritesLocationsActionsType";
import initFavoritesLocationsState from "../initState/initFavoritesLocationState";

const favoritesLocationsReducer = (
  state: IFavoritesLocationsState = initFavoritesLocationsState,
  action: FavoriteLocationActions
): IFavoritesLocationsState => {
  switch (action.type) {
    case FavoritesLocationActionsType.GET_FAVORITE_LOCATION_CONDITIONS_lOADING:
      return { ...state, isLoading: true };
    case FavoritesLocationActionsType.GET_FAVORITE_LOCATION_CONDITIONS_SUCCESS:
      state.data.push(action.payload);
      console.log(state.data);
      return { ...state, isLoading: false, data: [...state.data] };
    case FavoritesLocationActionsType.GET_FAVORITE_LOCATION_CONDITIONS_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default favoritesLocationsReducer;
