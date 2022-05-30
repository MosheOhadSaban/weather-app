import React, { useEffect } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { BsSun, BsPatchQuestion, BsHeart, BsHouseDoor } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { setFavoritesPageActive, setFavoritesPageInactive } from "../../../redux/actionsCreators/booleansActionsCreators";
import "./Navbar.css"

function NavbarComponent() {
  const isFavoritesPage: boolean = useTypedSelector(
    (state) => state.booleans.isFavoritesPage
  );

  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/favorites") {
      dispatch(setFavoritesPageActive());
    }
    if (location.pathname === "/") {
      dispatch(setFavoritesPageInactive());
    }
  }, [dispatch, location]);

  return (
    <Navbar
      className="nav-bar shadow-sm Navbar" 
      expand="lg"
      style={{ backgroundColor: "#59a7d3ff" }}
    >
      <Container fluid>
        <Navbar.Brand>
          <BsSun
            style={{ fontSize: "80px", color: "#fbb347ff" }}
            className="title-sun"
          ></BsSun>
        </Navbar.Brand>
        <Navbar.Brand>
          <h1 className="fw-bolder" style={{ color: "#fafafa" }}>
            How Is The Weather Today
          </h1>
        </Navbar.Brand>
        <Navbar.Brand className="d-none d-sm-block ">
          <BsPatchQuestion
            style={{ fontSize: "40px", color: "#fafafa" }}
          ></BsPatchQuestion>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className=" bg-warning "
        />
        <Navbar.Collapse className="gap-3 justify-content-sm-end">
          {isFavoritesPage && (
            <Button
              variant="outline-warning"
              className="fs-5 d-flex mt-2 mt-0-md gap-1 justify-content-center"
              href="/"
            >
              Home
              <div>
                <BsHouseDoor className="mb-1"></BsHouseDoor>
              </div>
            </Button>
          )}

          {!isFavoritesPage && (
            <Button
              variant="outline-light"
              className="fs-5 d-flex mt-2 mt-0-md gap-1 justify-content-center"
              href="favorites"
            >
              Favorites
              <div>
                <BsHeart></BsHeart>
              </div>
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
