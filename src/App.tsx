import React from "react";
import "./App.css";
import 'animate.css';
import Content from "./components/layout/Content/Content";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/layout/Navbar/Navbar";
import { Provider } from "react-redux";
import store from "./redux/store";


function App() {
  return (
    <Provider store={store}>
        <div className="App">
          <NavbarComponent />
          <Content />
        </div>
    </Provider>
  );
}

export default App;
