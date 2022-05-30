import React, { ChangeEvent, useEffect, useState } from "react";
import { Form, FormControl, Spinner, Alert } from "react-bootstrap";
import "./SearchField.css";
import { getLocations } from "../../../../redux/actionsCreators/locationsActionsCreators";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { useDebouncedCallback } from "use-debounce";
import ErrorToast from "../../../shared/ErrorToast/ErrorToast";

function SearchField() {
  const errorMessage: string | null = useTypedSelector(
    (state) => state.location.error
  );
  const [isErrorToast, setIsErrorToast] = useState(false);
  const [isSearchFieldEmpty, setIsSearchFieldEmpty] = useState(false);
  const dispatch = useDispatch();
  const isSearchLoading: boolean = useTypedSelector(
    (state) => state.location.isLoading
  );
  const debouncedSearchHandler = useDebouncedCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      dispatch<any>(getLocations(event.target.value));
      if (!event.target.value) {
        setIsSearchFieldEmpty(true);
      } else {
        setIsSearchFieldEmpty(false);
      }
    },
    500
  );

  useEffect(() => {
    if (errorMessage) {
      setIsErrorToast(true);
    }
  }, [errorMessage]);

  return (
    <Form className="SearchField">
      <FormControl
        aria-label="Large"
        aria-describedby="inputGroup-sizing-sm"
        placeholder="Search for location..."
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          debouncedSearchHandler(event);
        }}
      />
      <span className="spinner">
        {isSearchLoading && <Spinner animation="border" variant="primary" />}
      </span>
      {errorMessage && (
        <ErrorToast
          isErrorToast={isErrorToast}
          setIsErrorToast={setIsErrorToast}
          errorMessage={errorMessage}
          delayTime={4000}
        />
      )}
      {isSearchFieldEmpty && (
        <Alert variant={"danger"}>
          Invalid search!, field can't be empty!{" "}
        </Alert>
      )}
    </Form>
  );
}

export default SearchField;
