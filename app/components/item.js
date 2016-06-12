import React, { PropTypes, Component } from "react"
import { Link } from "react-router"
import Immutable from "immutable"

import * as ItemActions from "../actions/ItemActions"

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

  render() {
  	const { item, dispatch } = this.props

    return (
      <tr className="item" key={item.id} ref="activeItem">
        <td><span><Link to={`/item/${item.id}`}>{item.name}</Link></span></td>
        <td><span>{item.value}</span></td>
        <td><button className="btn btn-default btn-xs" onClick={(e) => this.handleRemove(e, item.id)}><i className="fa fa-trash" /></button></td>
      </tr>
    )
  }
}
