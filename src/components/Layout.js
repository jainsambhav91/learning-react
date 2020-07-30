import React from "react";
import { Footer } from "./FooterComponent";
import { Header } from "./HeaderComponent";

export class Layout extends React.Component {
  render() {
    const title = "Welcome Sambhav";

    return (
      <div>
        <Header title={title} />
        <Header title={"this is another title"}></Header>
        <Footer />
      </div>
    );
  }
}
