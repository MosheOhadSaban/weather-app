import ICurrentConditionsState from "../../models/CurrentConditionsState";
import { CurrentConditionsActions } from "../actions/currentConditionsActions";
import { CurrentConditionsActionType } from "../actionsType/currentConditionsActionsType";
import initCurrentConditionsState from "./../initState/initCurrentConditionsState";

const currentConditionsReducer = (
  state: ICurrentConditionsState = initCurrentConditionsState,
  action: CurrentConditionsActions
): ICurrentConditionsState => {
  switch (action.type) {
    case CurrentConditionsActionType.GET_CURRENT_CONDITIONS_LOADING:
      return { ...state, isLoading: true };
    case CurrentConditionsActionType.GET_CURRENT_CONDITIONS_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case CurrentConditionsActionType.GET_CURRENT_CONDITIONS_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default currentConditionsReducer;
