import React, { Component, PropTypes } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import Immutable from "immutable"

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

  getInitialState() {
    console.log("ItemManager->getInitialState()")
  }

  getDefaultProps() {
    console.log("ItemManager->getDefaultProps()")
  }

  componentWillMount() {
    console.log("ItemManager->componentWillMount()") 

    //this.props.items = Immutable.List([Immutable.Map({id: 1, name: "item#1", value: 5.1})])
  }

  componentDidMount() {
    console.log("ItemManager->componentDidMount()")
  }

  componentWillReceiveProps() {
    console.log("ItemManager->componentWillReceiveProps()")
  }

  shouldComponentUpdate() {
    return true
  }

  componentWillUpdate() {
    console.log("ItemManager->componentWillUpdate()")
  }

  componentDidUpdate() {
    console.log("ItemManager->componentDidUpdate()")
  }

  componentWillUnmount() {
   console.log("ItemManager->componentWillUnmount()") 
  }

  render() {
    console.log("ItemManager->render()")

    const dispatch = this.props.dispatch
    const items = this.props.items


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
