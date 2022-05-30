import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import ICurrentConditions from "../../../../models/CurrentConditions";
import ILocation from "./../../../../models/Location";
import { BsThermometerSun } from "react-icons/bs";
import ErrorToast from "../../../shared/ErrorToast/ErrorToast";

function CurrentConditions() {
  // const isMetricView: boolean = useTypedSelector(
  //   (state) => state.booleans.isMetricView
  // );
  const [isErrorToast, setIsErrorToast] = useState(false);
  const currentConditions: ICurrentConditions = useTypedSelector(
    (state) => state.currentConditions.data[0]
  );
  const location: ILocation = useTypedSelector(
    (state) => state.currentLocation.data
  );

  const errorMessage: string | null = useTypedSelector(
    (state) => state.currentLocation.error
  );
  useEffect(() => {
    if (errorMessage) {
      setIsErrorToast(true);
    }
  }, [errorMessage]);

  return (
    <Card
      bg={"light"}
      border="light"
      text={"dark"}
      className="CurrentConditions m-3 shadow"
    >
      <Card.Body>
        <Card.Title>
          <h2>
            {location.LocalizedName}{" "}
            {currentConditions.Temperature.Metric.Value} <span>&#8451;</span>{" "}
            <BsThermometerSun />
          </h2>
        </Card.Title>
        <Card.Body>
          <h3>{location.Country.LocalizedName}</h3>
          <h4>{currentConditions.WeatherText}</h4>
          <h5>
            {new Date(
              currentConditions.LocalObservationDateTime
            ).toDateString()}
          </h5>
        </Card.Body>
      </Card.Body>
      <ErrorToast
        isErrorToast={isErrorToast}
        setIsErrorToast={setIsErrorToast}
        errorMessage={errorMessage}
        delayTime={4000}
      />
    </Card>
  );
}

export default CurrentConditions;
