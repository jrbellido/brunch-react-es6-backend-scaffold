import React from "react";
import * as ItemActions from "./actions/ItemActions"

export default class ItemList extends React.Component {
  render() {
  	const { items, dispatch } = this.props

    return (
      <div className="item-list">
        <h2>Item List</h2>
        <ul>
        	<li>Demo item</li>
        </ul>
      </div>
    )
  }
}
