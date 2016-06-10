import React, { PropTypes } from "react";
import Immutable from "immutable"

if (typeof window !== 'undefined')
  require("../styles/item.scss")

export default class Item extends React.Component {
  handleRemove(ev, id) {
    console.dump("Item->handleRemove", this, ev, id)
    this.props.deleteItem(id)
    ev.preventDefault()
  }

  render() {
  	const { item, dispatch } = this.props

    return (
      <li className="item" key={item.id} ref="activeItem">
      	<div>
          <span><label>Name:</label> {item.name}</span>
          <span><label>Value:</label> {item.value}</span>
          <span>
            <button onClick={(e) => this.handleRemove(e, item.id)}>Remove</button>
          </span>
        </div>
      </li>
    )
  }
}
