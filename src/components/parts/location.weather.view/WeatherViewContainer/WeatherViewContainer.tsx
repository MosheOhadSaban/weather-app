import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import ICurrentConditions from "../../../../models/CurrentConditions";
import { getCurrentConditions } from "../../../../redux/actionsCreators/currentConditionsActionsCreators";
import { getDailyForecasts } from "../../../../redux/actionsCreators/dailyForecastsActionsCreators";
import {
  getLocationByCoordinates,
  setCurrentLocation,
  setGeopositionCoordinatesError,
} from "../../../../redux/actionsCreators/currentLocationActionsCreators";
import { getGeopositionCoordinates } from "../../../../utils/getGeopositionCoordinates";
import CurrentConditions from "../CurrentConditions/CurrentConditions";
import FiveDaysOfForecasts from "../FiveDaysOfForecasts/FiveDaysOfForecasts";
import "./WeatherViewContainer.css";

import ILocation from "../../../../models/Location";
import AddToFavoritesBtn from "../AddToFavoritesBtn/AddToFavoritesBtn";
import RemoveFromFavoritesBtn from "../RemoveFromFavoritesBtn/RemoveFromFavoritesBtn";
import { geSotrageFavoriteLocationItem } from "../../../../utils/favoritesUtils";
import {
  setFavoriteLocationOff,
  setFavoriteLocationOn,
  SetPickedFavoriteOff,
} from "../../../../redux/actionsCreators/booleansActionsCreators";

function WeatherViewContainer() {
  const dispatch = useDispatch();
  let renderCount = useRef(0);
  const currentLocationKey: any = useTypedSelector(
    (state) => state.currentLocation.data.Key
  );
  const currentConditions: ICurrentConditions = useTypedSelector(
    (state) => state.currentConditions.data[0]
  );

  const isFavoriteLocation: boolean = useTypedSelector(
    (state) => state.booleans.isFavoriteLocation
  );
  const isFavoriteLocationPicked = useTypedSelector(
    (state) => state.booleans.isFavoriteLocationPicked
  );

  const defaultLocation: ILocation = {
    Key: "215854",
    LocalizedName: "Tel Aviv",
    Country: {
      ID: "",
      LocalizedName: "Israel",
    },
  };

  useEffect(() => {
    if (renderCount.current < 2) {
      if (!isFavoriteLocationPicked) {
        getGeopositionCoordinates()
          .then((coordinates: any) => {
            dispatch<any>(
              getLocationByCoordinates(
                coordinates.latitude,
                coordinates.longitude
              )
            );
            if (currentLocationKey !=="") {
              dispatch<any>(getCurrentConditions(currentLocationKey));
              dispatch<any>(getDailyForecasts(currentLocationKey));
            }
          })
          .catch((coordinates: any) => {
            dispatch(setGeopositionCoordinatesError(coordinates.error.message));
            dispatch<any>(getCurrentConditions(defaultLocation.Key));
            dispatch<any>(getDailyForecasts(defaultLocation.Key));
            dispatch(setCurrentLocation(defaultLocation));
          });
        renderCount.current = renderCount.current + 1;
      } else {
        SetPickedFavoriteOff();
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLocationKey]);

  useEffect(() => {
    if (currentLocationKey) {
      if (geSotrageFavoriteLocationItem(currentLocationKey)) {
        dispatch(setFavoriteLocationOn());
      } else {
        dispatch(setFavoriteLocationOff());
      }
    }
  }, [currentLocationKey, dispatch, isFavoriteLocation]);

  return (
    <Container className="shadow WeatherViewContainer animate__animated  animate__fadeInDown">
      <Row>
        <Col xs={8} sm={4}>
          {currentConditions && <CurrentConditions />}
        </Col>
        <Col xs={4} sm={8} className="d-flex justify-content-end">
          <div className="mt-3 mr-5">
            {!isFavoriteLocation && <AddToFavoritesBtn />}
            {isFavoriteLocation && <RemoveFromFavoritesBtn />}
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <FiveDaysOfForecasts />
        </Col>
      </Row>
    </Container>
  );
}

export default WeatherViewContainer;
