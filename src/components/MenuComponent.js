import React from "react";
import {
  Media,
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

export class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null,
    };
  }

  dishClicked(dish) {
    this.setState({ selectedDish: dish });
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 mt-5">
          <Card onClick={() => this.dishClicked(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
        <div className="row">{this.renderDish(this.state.selectedDish)}</div>
      </div>
    );
  }
}
