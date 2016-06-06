import React from "react"
import { render } from "react-dom"
import { Router } from "react-router"
import { browserHistory } from "react-router"

import routes from "./routes"

let initialState = window.__INITIAL_STATE__

render(
  <Router children={routes} history={browserHistory} />,
  document.getElementById("root")
)
