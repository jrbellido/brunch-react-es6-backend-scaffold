import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"
import { withRouter, Link } from "react-router"

import { Button, FormGroup, Col } from "react-bootstrap/lib"
import { Form, ValidatedInput } from "react-bootstrap-validation"

import console from "../lib/console"
import * as ItemActions from "../actions/ItemActions"

import Item from "./item"

class ItemNew extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  _handleValidSubmit(values) {
    console.dump("ItemNew->_handleValidSubmit", this, values)

    this.props.dispatch(ItemActions.createItem(values.name, values.value)).then(() => {
      this.props.router.replace("/")
    })
  }

  _handleInvalidSubmit(errors, values) {
    console.dump("ItemNew->_handleInvalidSubmit", this, errors, values)
  }

  render() {
    return (
      <Form 
        className="item-new"
        onValidSubmit={this._handleValidSubmit.bind(this)} 
        onInvalidSubmit={this._handleInvalidSubmit.bind(this)}
      >
        <ol className="breadcrumb">
          <li><Link to={`/`}>Items</Link></li>
          <li className="active">New</li>
        </ol>

        <h3>Create a new item</h3>

        <div className="container no-h-padding">
          <div className="row">
            <Col xs={4}>
              <ValidatedInput
                type="text"
                name="name"
                placeholder="Name"
                validate="required"
                errorHelp={{
                  required: "Please enter a name"
                }}
              />
            </Col>
          </div>

          <div className="row">
            <Col xs={4}>
              <ValidatedInput
                type="text"
                name="value"
                placeholder="Value"
                validate="required"
                errorHelp={{
                  required: "Please enter a value"
                }}
              />
            </Col>
          </div>

          <div className="row">
            <Col xs={12}>
              <Button bsStyle="primary" type="submit">Create</Button> <Link className="btn btn-default" to={`/`}>Cancel</Link>
            </Col>
          </div>
        </div>
      </Form>
    )
  }
}

export default connect(state => (state))(withRouter(ItemNew))
