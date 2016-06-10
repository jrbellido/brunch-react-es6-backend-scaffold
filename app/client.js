import React from "react"
import { render } from "react-dom"
import { Router, browserHistory, RouterContext, match } from "react-router"
import { fromJS } from "immutable"
import { Provider } from "react-redux"
import { createStore, combineReducers, applyMiddleware }  from "redux"
import assign from "object-assign"
import console from "./lib/console"

import * as ItemActions from "./actions/ItemActions"

import ItemReducer from "./reducers/ItemReducer"
import promiseMiddleware from "./lib/promiseMiddleware"
import fetchComponentData from "./lib/fetchComponentData"

import routes from "./routes"

const initialState = window.__INITIAL_STATE__

const reducer = combineReducers({
	items: ItemReducer
})

const store = applyMiddleware(promiseMiddleware)(createStore)(reducer, initialState)

browserHistory.listenBefore((location, callback) => {
	console.dump("browserHistory.listenBefore", location, callback)

	match({ routes, location }, (err, redirectLocation, renderProps) => {
		console.dump("react-router->match", err, redirectLocation, renderProps)

	    fetchComponentData(store.dispatch, renderProps.components, renderProps.params)
	    	.then(() => {
		    	callback(initialState)
	    	})
	    	.catch(err => console.error(err.message))
	})
})

render(
	<Provider store={store}>
		<Router children={routes} history={browserHistory} />
	</Provider>,
	document.getElementById("root")
)
