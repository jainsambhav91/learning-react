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

export class Dishdetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.dish != null) {
      const comments = this.props.dish.comments.map((comment) => {
        return (
          <li>
            {comment.comment} <br></br> --{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
          </li>
        );
      });

      return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 mt-5">
              <Card>
                <CardImg
                  width="100%"
                  src={this.props.dish.image}
                  alt={this.props.dish.name}
                ></CardImg>
                <CardBody>
                  <CardTitle>{this.props.dish.name}</CardTitle>
                  <CardText>{this.props.dish.description}</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="col-12 col-md-5 mt-5">
              <p>Comments: </p>
              <ul>{comments}</ul>
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
