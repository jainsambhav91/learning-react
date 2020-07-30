import React from "react";
import { Menu } from "./MenuComponent";
import { Dishdetail } from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";
import { Header } from "./HeaderComponent";
import { Footer } from "./FooterComponent";

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  dishClicked(dishID) {
    this.setState({ selectedDish: dishID });
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Menu
          dishes={this.state.dishes}
          onClick={(dishId) => this.dishClicked(dishId)}
        ></Menu>
        <Dishdetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === this.state.selectedDish
            )[0]
          }
        ></Dishdetail>
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;
