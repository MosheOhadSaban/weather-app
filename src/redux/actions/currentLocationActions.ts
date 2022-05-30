import ILocation from "../../models/Location";
import { CurrentLocationActionsType } from "../actionsType/currentLocationActionsType";

export interface GetLocationByGeopositionLoadingAction {
  type: CurrentLocationActionsType.GET_LOCATION_BY_GEOPOSITION_LOADING;
}

export interface GetLocationByGeopositionSuccessAction {
  type: CurrentLocationActionsType.GET_LOCATION_BY_GEOPOSITION_SUCCESS;
  payload: ILocation;
}

export interface GetLocationByGeopositionErrorAction {
  type: CurrentLocationActionsType.GET_LOCATION_BY_GEOPOSITION_ERROR;
  payload: string | null;
}

export interface GetGeopositionCoordinatesErrorAction {
  type: CurrentLocationActionsType.GET_GEOPOSITION_COORDINATES_ERROR;
  payload: string | null;
}

export interface SetCurrentLocation {
  type: CurrentLocationActionsType.SET_CURRNET_LOCATION;
  payload: ILocation;
}

export type CurrentLocationActions =
  | GetLocationByGeopositionLoadingAction
  | GetLocationByGeopositionSuccessAction
  | GetLocationByGeopositionErrorAction
  | GetGeopositionCoordinatesErrorAction
  | SetCurrentLocation;
