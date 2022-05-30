import { Dispatch } from "react";
import { LocationsActions } from "../actions/locationsActions";
import { LocationsActionsType } from "../actionsType/locationsActionsType";
import { getLocationsAsync } from "./../../api/Locations-API";

export const getLocations = (searchValue: string) => {
  return async (dispatch: Dispatch<LocationsActions>) => {
    dispatch(initLocationStateError());
    if (searchValue) {
      dispatch({
        type: LocationsActionsType.GET_LOCATIONS_LOADING,
      });

      try {
        const { data } = await getLocationsAsync(searchValue);
        dispatch({
          type: LocationsActionsType.GET_LOCATIONS_SUCCESS,
          payload: data,
        });
      } catch (error: any) {
        dispatch({
          type: LocationsActionsType.GET_LOCATIONS_ERROR,
          payload: error.message,
        });
      }
    } else {
      dispatch(initLocationsStateData());
    }
  };
};

const initLocationsStateData = (): LocationsActions => {
  const action: LocationsActions = {
    type: LocationsActionsType.INIT_LOCATIONS_STATE_DATA,
  };
  return action;
};

const initLocationStateError = (): LocationsActions => {
  const action: LocationsActions = {
    type: LocationsActionsType.INIT_LOCATIONS_STATE_ERROR,
  };
  return action;
};
