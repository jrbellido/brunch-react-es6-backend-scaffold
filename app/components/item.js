import React, { PropTypes, Component } from "react";
import Immutable from "immutable"

import * as ItemActions from "../actions/ItemActions"

if (typeof window !== 'undefined')
  require("../styles/item.scss")

export default class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
  }

  handleRemove(ev, id) {
    console.dump("Item->handleRemove", this, ev, id)

    this.props.deleteItem(id)
    ev.preventDefault()
  }

  componentWillUnmount() { console.log("Item->componentWillUnmount") }

  render() {
    console.dump("Item->render", this)

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
