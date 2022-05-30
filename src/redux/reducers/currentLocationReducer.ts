
import ICurrentLocationState from "../../models/CurrentLocationState";
import { CurrentLocationActions } from "../actions/currentLocationActions";
import { CurrentLocationActionsType } from "../actionsType/currentLocationActionsType";
import initCurrentLocationState from "../initState/initCurrentLocationState";

const currentLocationReducer = (
  state: ICurrentLocationState = initCurrentLocationState,
  action: CurrentLocationActions
): ICurrentLocationState => {
  switch (action.type) {
    case CurrentLocationActionsType.GET_LOCATION_BY_GEOPOSITION_LOADING:
      return { ...state, isLoading: true };
    case CurrentLocationActionsType.GET_LOCATION_BY_GEOPOSITION_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case CurrentLocationActionsType.GET_LOCATION_BY_GEOPOSITION_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case CurrentLocationActionsType.GET_GEOPOSITION_COORDINATES_ERROR:
      return { ...state, error: action.payload };
    case CurrentLocationActionsType.SET_CURRNET_LOCATION:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default currentLocationReducer;
