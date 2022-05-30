import { LocationsActions } from "../actions/locationsActions";
import { LocationsActionsType } from "../actionsType/locationsActionsType";
import ILocationState from "./../../models/LocationState";
import initLocationState from "./../initState/initLocationState";

const locationsReducer = (
  state: ILocationState = initLocationState,
  action: LocationsActions
): ILocationState => {
  switch (action.type) {
    case LocationsActionsType.GET_LOCATIONS_LOADING:
      return { ...state, isLoading: true };
    case LocationsActionsType.GET_LOCATIONS_SUCCESS:
      state.data = action.payload;
      return {
        ...state,
        isLoading: false,
        data: [...state.data],
      };
    case LocationsActionsType.GET_LOCATIONS_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case LocationsActionsType.INIT_LOCATIONS_STATE_DATA:
      return { ...state, data: [] };
    case LocationsActionsType.INIT_LOCATIONS_STATE_ERROR:
      return { ...state, error: null };
    default:
      return state;
  }
};

export default locationsReducer;
