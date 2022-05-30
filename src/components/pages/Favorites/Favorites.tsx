import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import { getLocalStorageFavoriteLocationsList } from "../../../utils/favoritesUtils";
import { useDispatch } from "react-redux";
import { getFavoritesCurrentConditions } from "../../../redux/actionsCreators/FavoritesLocationsActionsCreators";
import IFavoritesLocation from "./../../../models/FavoritesLocation";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import FavoriteLocationCard from "../../parts/FavoriteLocationCard/FavoriteLocationCard";
import ErrorToast from "../../shared/ErrorToast/ErrorToast";

function Favorites() {
  const dispatch = useDispatch();
  const [isErrorToast, setIsErrorToast] = useState(false);
  const favoritesLocations: IFavoritesLocation[] = useTypedSelector(
    (state) => state.favoritesLocations.data
  );
  const errorMessage: string | null = useTypedSelector(
    (state) => state.favoritesLocations.error
  );
  useEffect(() => {
    if (errorMessage) {
      setIsErrorToast(true);
    }
  }, [errorMessage]);

  useEffect(() => {
    const favoritesLocations = getLocalStorageFavoriteLocationsList();
    favoritesLocations.forEach((location) => {
      dispatch<any>(getFavoritesCurrentConditions(location));
    });
  }, [dispatch]);

  return (
    <Container fluid className="shadow" style={{ height: "100vh" }}>
      <Row>
        {favoritesLocations.map((location, index) => (
          <Col xs={12} sm={3}>
            <FavoriteLocationCard
              key={index}
              Key={location.Key}
              LocalizedName={location.LocalizedName}
              Country={{
                ID: location.Country.ID,
                LocalizedName: location.Country.LocalizedName,
              }}
              IsDayTime={location.IsDayTime}
              LocalObservationDateTime={location.LocalObservationDateTime}
              WeatherText={location.WeatherText}
              WeatherIcon={location.WeatherIcon}
              Temperature={{
                Metric: {
                  Value: location.Temperature.Metric.Value,
                  Unit: location.Temperature.Metric.Unit,
                  UnitType: location.Temperature.Metric.UnitType,
                },
                Imperial: {
                  Value: location.Temperature.Imperial.Value,
                  Unit: location.Temperature.Imperial.Unit,
                  UnitType: location.Temperature.Imperial.UnitType,
                },
              }}
            />
          </Col>
        ))}
      </Row>
      <ErrorToast
        isErrorToast={isErrorToast}
        setIsErrorToast={setIsErrorToast}
        errorMessage={errorMessage}
        delayTime={4000}
      />
    </Container>
  );
}

export default Favorites;
