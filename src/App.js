import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { Main } from "./components/MainComponent";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Main></Main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
