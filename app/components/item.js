import React, { PropTypes } from "react";
import Immutable from "immutable"

export default class Item extends React.Component {
  render() {
  	const item = this.props.item

    return (
      <li className="item"><span>{item.name}</span> <button>edit</button></li>
    )
  }
}
