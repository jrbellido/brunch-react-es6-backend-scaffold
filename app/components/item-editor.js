import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"
import { withRouter, Link } from "react-router"
import Button from "react-bootstrap/lib/Button"

import console from "../lib/console"

import * as ItemActions from "../actions/ItemActions"

import ItemList from "./item-list"

class ItemEditor extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  static needs = [
    ItemActions.getItem
  ]

  handleSaveChanges(ev) {
    console.dump("ItemEditor->handleSaveChanges", this, ev)

    const form = this.refs.itemEditForm

    const updatedItem = { name: form.name.value, value: form.value.value }

    this.props.dispatch(ItemActions.updateItem(this.props.params.id, updatedItem)).then(() => {
      this.props.router.replace("/")
    })

    ev.preventDefault()
  }

  componentDidMount() { 
    console.dump("ItemEditor->componentDidMount", this)

    const form = this.refs.itemEditForm
    form.name.value = this.props.item.name
    form.value.value = this.props.item.value
  }

  render() {
    console.dump("ItemEditor->render", this)

    const { item, dispatch } = this.props

    return (
      <div className="item-editor">
        <form ref="itemEditForm" onSubmit={ (ev) => this.handleSaveChanges(ev) }>
          <ol className="breadcrumb">
            <li><Link to={`/`}>Items</Link></li>
            <li className="active">{item.name}</li>
          </ol>

          <h3>Edit: {item.name}</h3>
          
          <div className="container no-h-padding">
            <div className="row">
              <div className="col-xs-4">
                <div className="form-group">
                  <input className="form-control" name="name" type="text" placeholder="Name" />
                </div>

                <div className="form-group">
                  <input className="form-control" name="value" type="text" placeholder="Value" />
                </div>

                <Button bsStyle="primary" type="submit">Save</Button> <Link className="btn btn-default" to={`/`}>Cancel</Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(state => (state))(withRouter(ItemEditor))
