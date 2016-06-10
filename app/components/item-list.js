import React, { PropTypes } from "react"
import { bindActionCreators } from "redux"
import Immutable from "immutable"
import * as ItemActions from "../actions/ItemActions"

import Item from "./item"

export default class ItemList extends React.Component {
  static propTypes = {
    items: PropTypes.instanceOf(Immutable.List).isRequired,
    dispatch: PropTypes.func.isRequired
  }

  render() {
  	const { items, dispatch } = this.props

    return (
      <div className="item-list">
        <h2>Item List</h2>
        <ul>
          {
            items.map((item, index) => {
              return (<Item key={index} item={item} {...bindActionCreators(ItemActions, dispatch)} />)
            })
          }
        </ul>
      </div>
    )
  }
}
