import React from "react"
import { render } from "react-dom"
import { Router } from "react-router"
import { browserHistory } from "react-router"
import { fromJS } from "immutable"
import { Provider } from "react-redux"
import { createStore, combineReducers, applyMiddleware }  from "redux"
import assign from "object-assign"
import ItemReducer from "./reducers/ItemReducer"
import promiseMiddleware from "./lib/promiseMiddleware"
import immutifyState from "./lib/immutifyState"

import routes from "./routes"

const initialState = immutifyState(window.__INITIAL_STATE__)

console.log("client's initialState", initialState)

const reducer = combineReducers([ItemReducer])
const store = applyMiddleware(promiseMiddleware)(createStore)(reducer, initialState)

render(
	<Provider store={store}>
		<Router children={routes} history={browserHistory} />
	</Provider>,
	document.getElementById("root")
)
