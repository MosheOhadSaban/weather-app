import ICurrentConditions from "../../models/CurrentConditions";
import { CurrentConditionsActionType } from "../actionsType/currentConditionsActionsType";

export interface GetCurrentConditionsLoadingAction {
  type: CurrentConditionsActionType.GET_CURRENT_CONDITIONS_LOADING;
}

export interface GetCurrentConditionsSuccessAction {
  type: CurrentConditionsActionType.GET_CURRENT_CONDITIONS_SUCCESS;
  payload: ICurrentConditions[];
}

export interface GetCurrentConditionsErrorAction {
  type: CurrentConditionsActionType.GET_CURRENT_CONDITIONS_ERROR;
  payload: string | null;
}

export type CurrentConditionsActions =
  | GetCurrentConditionsLoadingAction
  | GetCurrentConditionsSuccessAction
  | GetCurrentConditionsErrorAction;
