import { Dispatch } from "react";
import { getCurrentConditionsAsync } from "../../api/Conditions-API";
import IFavoritesLocation from "../../models/FavoritesLocation";
import { FavoriteLocationActions } from "../actions/FavoritesLocationsActions";
import { FavoritesLocationActionsType } from "../actionsType/FavoritesLocationsActionsType";
import ILocation from "./../../models/Location";

export const getFavoritesCurrentConditions = (location: ILocation | any) => {

    
  return async (dispatch: Dispatch<FavoriteLocationActions>) => {
    dispatch({
      type: FavoritesLocationActionsType.GET_FAVORITE_LOCATION_CONDITIONS_lOADING,
    });
    try {
      let { data } = await getCurrentConditionsAsync(location.Key);
      data = data[0]
      
      const favoriteLocation: IFavoritesLocation = {
        Key: location.Key,
        LocalizedName: location.LocalizedName,
        Country: {
          ID: location.Country.ID,
          LocalizedName: location.Country.LocalizedName,
        },
        IsDayTime: data.IsDayTime,
        LocalObservationDateTime: data.LocalObservationDateTime,
        WeatherText: data.WeatherText,
        WeatherIcon: data.WeatherIcon,
        Temperature: {
          Metric: {
            Value: data.Temperature.Metric.Value,
            Unit: data.Temperature.Metric.Unit,
            UnitType: data.Temperature.Metric.UnitType,
          },
          Imperial: {
            Value: data.Temperature.Imperial.Value,
            Unit: data.Temperature.Imperial.Unit,
            UnitType: data.Temperature.Imperial.UnitType,
          },
        },
      };
      dispatch({
        type: FavoritesLocationActionsType.GET_FAVORITE_LOCATION_CONDITIONS_SUCCESS,
        payload: favoriteLocation,
      });
    } catch (error: any) {
      dispatch({
        type: FavoritesLocationActionsType.GET_FAVORITE_LOCATION_CONDITIONS_ERROR,
        payload: error.message,
      });
    }
  };
};
