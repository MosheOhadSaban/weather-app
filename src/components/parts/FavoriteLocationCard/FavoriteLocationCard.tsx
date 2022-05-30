import React from "react";
import IFavoritesLocation from "../../../models/FavoritesLocation";
import { Card } from "react-bootstrap";
import "./FavoriteLocationCard.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setFavoritesPageInactive,
  SetPickedFavoriteOn,
} from "../../../redux/actionsCreators/booleansActionsCreators";
import { getCurrentConditions } from "../../../redux/actionsCreators/currentConditionsActionsCreators";
import { getDailyForecasts } from "../../../redux/actionsCreators/dailyForecastsActionsCreators";
import { setCurrentLocation } from "../../../redux/actionsCreators/currentLocationActionsCreators";
import ILocation from "./../../../models/Location";

function FavoriteLocationCard(props: IFavoritesLocation) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location: ILocation = {
    Key: props.Key,
    LocalizedName: props.LocalizedName,
    Country: {
      ID: props.Country.ID,
      LocalizedName: props.Country.LocalizedName,
    },
  };
  const chooseLocationHandler = () => {
    navigate("/");
    dispatch(setFavoritesPageInactive());
    dispatch<any>(getCurrentConditions(props.Key));
    dispatch<any>(getDailyForecasts(props.Key));
    dispatch(setCurrentLocation(location));
    dispatch(SetPickedFavoriteOn());
  };
  return (
    <Card
      className="shadow ml-1 mt-1  mt-sm-5 mb-sm-5 FavoriteLocationCard animate__animated  animate__fadeInDown"
      bg={"light"}
    >
      <Card.Body className="card-body" onClick={chooseLocationHandler}>
        <Card.Title>
          <h2>{props.LocalizedName}</h2>
          <h3>{props.Country.LocalizedName}</h3>
          <h4>
            {props.Temperature.Metric.Value} <span>&#8451;</span>
          </h4>
          <h5>{props.WeatherText}</h5>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

export default FavoriteLocationCard;
