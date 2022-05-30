import React from "react";
import IDayForecast from "../../../../models/DayForecast";
import { Card } from "react-bootstrap";

function ForecastCard(props: IDayForecast) {
  return (
    <Card bg={"light"}>
      <Card.Title>
        <h4>
          {new Date(props.Date).toUTCString().split(" ").slice(0, 4).join(" ")}
        </h4>
      </Card.Title>
      <Card.Body>
        <h4>
          {props.Temperature.Minimum.Value}
          {""}
          <span>&#8451;</span> - {props.Temperature.Maximum.Value}
          {""}
          <span>&#8451;</span>
        </h4>
      </Card.Body>
    </Card>
  );
}

export default ForecastCard;
