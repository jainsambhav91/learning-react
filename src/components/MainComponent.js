import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { Menu } from "./MenuComponent";
import { Dishdetail } from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";

export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    dishClicked(dishID) {
        this.setState({ selectedDish: dishID });
    }


    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes}
                    onClick={(dishId) => this.dishClicked(dishId)}></Menu>
                <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}></Dishdetail>
            </div>
        );
    }
}

export default Main;
