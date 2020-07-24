import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

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
