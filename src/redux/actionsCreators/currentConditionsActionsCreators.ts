import { Dispatch } from "react";
import { CurrentConditionsActions } from "../actions/currentConditionsActions";
import { CurrentConditionsActionType } from "../actionsType/currentConditionsActionsType";
import { getCurrentConditionsAsync } from "./../../api/Conditions-API";

export const getCurrentConditions = (locationKey: string | null) => {
  return async (dispatch: Dispatch<CurrentConditionsActions>) => {
    dispatch({
      type: CurrentConditionsActionType.GET_CURRENT_CONDITIONS_LOADING,
    });
    try {
      let { data } = await getCurrentConditionsAsync(locationKey);
      dispatch({
        type: CurrentConditionsActionType.GET_CURRENT_CONDITIONS_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: CurrentConditionsActionType.GET_CURRENT_CONDITIONS_ERROR,
        payload: error.message,
      });
    }
  };
};
