import React from "react"
import * as ItemActions from "../actions/ItemActions"

export default class ItemManager extends React.Component {
  static needs = [ ItemActions.getItems ]

  render() {
    return (
      <div className="item-manager">
        <h3>Item Manager</h3>

        {this.props.children}
      </div>
    )
  }
}
