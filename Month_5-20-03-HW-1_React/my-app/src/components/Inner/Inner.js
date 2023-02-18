import React, { Component } from "react";

function MouseInside(InnerComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isInside: false,
      };
      this.mouseComeIn = this.mouseComeIn.bind(this);
      this.mouseComeOut = this.mouseComeOut.bind(this);
    }

    mouseComeIn() {
      this.setState({ isInside: true });
    }

    mouseComeOut() {
      this.setState({ isInside: false });
    }

    render() {
      return (
        <InnerComponent
          {...this.props}
          onMouseEnter={this.mouseComeIn}
          onMouseLeave={this.mouseComeOut}
          style={{ background: this.state.isInside ? "blue" : "" }}
        />
      );
    }
  };
}

export default MouseInside;
