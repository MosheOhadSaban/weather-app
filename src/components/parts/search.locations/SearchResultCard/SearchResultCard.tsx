import React from "react";
import { Card, Col } from "react-bootstrap";
import ILocation from "../../../../models/Location";
import "./SearchResultCard.css";
import { useDispatch } from "react-redux";
import { getCurrentConditions } from "../../../../redux/actionsCreators/currentConditionsActionsCreators";
import { getDailyForecasts } from "../../../../redux/actionsCreators/dailyForecastsActionsCreators";
import { setCurrentLocation } from "../../../../redux/actionsCreators/currentLocationActionsCreators";

function SearchResultCard(props: ILocation) {
  const dispatch = useDispatch();
  return (
    <Card
      className="SearchResultCard"
      onClick={() => {
        dispatch<any>(getCurrentConditions(props.Key));
        dispatch<any>(getDailyForecasts(props.Key));
        dispatch(setCurrentLocation(props))
      }}
    >
      <div className="card-content">
        <Col>
          {props.LocalizedName} {props.Country.LocalizedName}
        </Col>
      </div>
    </Card>
  );
}

export default SearchResultCard;
