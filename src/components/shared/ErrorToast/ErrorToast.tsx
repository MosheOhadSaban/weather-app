import React from "react";
import { Toast } from "react-bootstrap";
import IErrorToast from "../../../models/ErrorToast";
import "./ErrorToast.css";

function ErrorToast(props: IErrorToast) {
  return (
    <Toast
      className="ErrorToast"
      autohide
      bg={"danger"}
      animation={true}
      onClose={() => {
        props.setIsErrorToast(false);
      }}
      show={props.isErrorToast}
      delay={props.delayTime}
      bsPrefix={"toast"}
    >
      <Toast.Header>
        <strong className="me-auto">Error Message:</strong>
      </Toast.Header>
      <Toast.Body className="body">
        A error {props.errorMessage} occurred!. 
      </Toast.Body>
    </Toast>
  );
}

export default ErrorToast;
