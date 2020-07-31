import React from "react";
import { Menu } from "./MenuComponent";
import { Dishdetail } from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";
import { Header } from "./HeaderComponent";
import { Footer } from "./FooterComponent";
import { Home } from "./HomeComponent";
import { Switch, Route, Redirect } from "react-router-dom";

const HomePage = () => {
  return <Home />;
};

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;
