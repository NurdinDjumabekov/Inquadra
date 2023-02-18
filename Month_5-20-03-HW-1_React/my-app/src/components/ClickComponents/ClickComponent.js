import React, { Component } from "react";

class MouseClickComponent extends Component {
  render() {
    return (
      <button
        className="MouseClickComponent"
        onClick={this.props.onClick}
        onContextMenu={this.props.onContextMenu}
      >
        {this.props.buttonName} hello world
      </button>
    );
  }
}

export default MouseClickComponent;
