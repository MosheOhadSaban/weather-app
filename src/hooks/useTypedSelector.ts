import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../redux/reducers/combineReducers";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

