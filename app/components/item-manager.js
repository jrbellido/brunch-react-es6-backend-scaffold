import React, { Component, PropTypes } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import * as ItemActions from "../actions/ItemActions"

import ItemForm from "./item-form"
import ItemList from "./item-list"

class ItemManager extends Component {
  static propTypes = {
    items: PropTypes.any.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  static needs = [
    ItemActions.getItems
  ]

  render() {
    const { items, dispatch } = this.props

    return (
      <div className="item-manager">
        <h3>Item Manager</h3>

        <ItemList items={items}
            {...bindActionCreators(ItemActions, dispatch)} />

        <ItemForm 
            {...bindActionCreators(ItemActions, dispatch)} />
      </div>
    )
  }
}

export default connect(state => ({ items: state[0] }))(ItemManager)
