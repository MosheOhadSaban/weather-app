import { LocationsActionsType } from "../actionsType/locationsActionsType";
import ILocation from "./../../models/Location";

export interface GetLocationsLoadingAction {
  type: LocationsActionsType.GET_LOCATIONS_LOADING;
}

export interface GetLocationsSuccessAction {
  type: LocationsActionsType.GET_LOCATIONS_SUCCESS;
  payload: ILocation[];
}

export interface GetLocationsErrorAction {
  type: LocationsActionsType.GET_LOCATIONS_ERROR;
  payload: string | null;
}

export interface InitLocationsStateData {
  type: LocationsActionsType.INIT_LOCATIONS_STATE_DATA;
}

export interface InitLocationStateError {
  type: LocationsActionsType.INIT_LOCATIONS_STATE_ERROR;
}

export type LocationsActions =
  | GetLocationsLoadingAction
  | GetLocationsSuccessAction
  | GetLocationsErrorAction
  | InitLocationsStateData
  | InitLocationStateError;
