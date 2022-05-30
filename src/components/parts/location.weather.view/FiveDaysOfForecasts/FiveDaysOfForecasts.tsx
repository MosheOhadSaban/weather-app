import React, { useEffect, useState } from "react";
import { CardGroup, Col, Container, Row } from "react-bootstrap";
import { BsCalendarWeek } from "react-icons/bs";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import ErrorToast from "../../../shared/ErrorToast/ErrorToast";
import ForecastCard from "../ForecastCard/ForecastCard";
import IDayForecast from "./../../../../models/DayForecast";

function FiveDaysOfForecasts() {
  const daysOfForecasts: IDayForecast[] = useTypedSelector(
    (state) => state.dailyForecasts.data
  );
  const [isErrorToast, setIsErrorToast] = useState(false);
  const errorMessage: string | null = useTypedSelector(
    (state) => state.dailyForecasts.error
  );

  useEffect(() => {
    if (errorMessage) {
      setIsErrorToast(true);
    }
  }, [errorMessage]);
  return (
    <Container className="mt-1">
      <Row>
        <Col className="d-flex justify-content-center">
          <h2 className="align-middle">
            5 Days of Daily Forecasts <BsCalendarWeek />{" "}
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <CardGroup className="mb-4">
            {daysOfForecasts.map((day, index) => (
              <ForecastCard
                key={index}
                Date={day.Date}
                Temperature={{
                  Minimum: {
                    Value: day.Temperature.Minimum.Value,
                    Unit: day.Temperature.Minimum.Unit,
                    UnitType: day.Temperature.Minimum.UnitType,
                  },
                  Maximum: {
                    Value: day.Temperature.Maximum.Value,
                    Unit: day.Temperature.Maximum.Unit,
                    UnitType: day.Temperature.Maximum.UnitType,
                  },
                }}
              />
            ))}
          </CardGroup>
        </Col>
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

export default FiveDaysOfForecasts;
