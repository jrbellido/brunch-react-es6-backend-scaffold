import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"
import { withRouter, Link } from "react-router"

import { Form, Button } from "react-bootstrap/lib"

import console from "../lib/console"
import * as ItemActions from "../actions/ItemActions"

import Item from "./item"

class ItemForm extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
  }

  handleSubmit(ev) {
  	console.dump("ItemForm->handleSubmit", this, ev)

    const form = this.refs.formElement

    this.props.dispatch(ItemActions.createItem(form.name.value, form.value.value)).then(() => {
      this.props.router.replace("/")
    })

  	ev.preventDefault()
  }

  render() {
    return (
      <form className="item-form" onSubmit={(e) => this.handleSubmit(e)} ref="formElement">
        <ol className="breadcrumb">
          <li><Link to={`/`}>Items</Link></li>
          <li className="active">New</li>
        </ol>

        <h3>Create a new item</h3>

        <div className="container no-h-padding">
          <div className="row">
            <div className="col-xs-4">
              <div className="form-group">
                <input className="form-control" name="name" type="text" placeholder="Name" />
              </div>

              <div className="form-group">
                <input className="form-control" name="value" type="text" placeholder="Value" />
              </div>

              <Button bsStyle="primary" type="submit">Create</Button> <Link className="btn btn-default" to={`/`}>Cancel</Link>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

export default connect(state => (state))(withRouter(ItemForm))
