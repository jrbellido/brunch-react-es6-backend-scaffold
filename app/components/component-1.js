import React from "react";
import PinList from "./pin-list"

export default class Component1 extends React.Component {
  render() {
  	const { pins, dispatch } = this.props

    return (
      <div id="component-1">
        <h2>Component #1</h2>
        <PinList></PinList>
      </div>
    )
  }
}
