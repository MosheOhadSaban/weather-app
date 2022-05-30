import { Dispatch } from "redux";
import { getGeopositionAysnc } from "../../api/Geoposition-API";
import { CurrentLocationActions } from "../actions/currentLocationActions";

import { CurrentLocationActionsType } from "../actionsType/currentLocationActionsType";
import ILocation from "./../../models/Location";

export const getLocationByCoordinates = (lat: string, lon: string) => {
  return async (dispatch: Dispatch<CurrentLocationActions>) => {
    dispatch({
      type: CurrentLocationActionsType.GET_LOCATION_BY_GEOPOSITION_LOADING,
    });
    try {
      const { data } = await getGeopositionAysnc(lat, lon);
      dispatch({
        type: CurrentLocationActionsType.GET_LOCATION_BY_GEOPOSITION_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: CurrentLocationActionsType.GET_LOCATION_BY_GEOPOSITION_ERROR,
        payload: error.message,
      });
    }
  };
};

export const setGeopositionCoordinatesError = (
  errorMessage: string
): CurrentLocationActions => {
  const action: CurrentLocationActions = {
    type: CurrentLocationActionsType.GET_GEOPOSITION_COORDINATES_ERROR,
    payload: errorMessage,
  };

  return action;
};

export const setCurrentLocation = (
  location: ILocation
): CurrentLocationActions => {
  const action: CurrentLocationActions = {
    type: CurrentLocationActionsType.SET_CURRNET_LOCATION,
    payload: location,
  };
  return action;
};
