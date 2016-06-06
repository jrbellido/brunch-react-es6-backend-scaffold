import React from "react"

export default class ItemManager extends React.Component {
  render() {
    return (
      <div className="item-manager">
        <h3>Item Manager</h3>

        {this.props.children}
      </div>
    )
  }
}
