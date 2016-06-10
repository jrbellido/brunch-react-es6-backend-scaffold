import React, { Component, PropTypes } from "react"
import { bindActionCreators } from "redux"
import Immutable from "immutable"
import * as ItemActions from "../actions/ItemActions"

import Item from "./item"

export default class ItemList extends Component {
  static propTypes = {
    items: PropTypes.instanceOf(Immutable.List).isRequired,
    dispatch: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    console.dump("ItemList->render", this)

  	const { items, dispatch } = this.props

    return (
      <div className="item-list">
        <h2>Item List</h2>
        <ul>
          {
            items.map((item, index) => {
              return (<Item key={index} item={item} dispatch={dispatch} {...bindActionCreators(ItemActions, dispatch)} />)
            })
          }
        </ul>
      </div>
    )
  }
}
