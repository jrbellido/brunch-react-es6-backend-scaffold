import React from "react"
import { render } from "react-dom"
import { Router } from "react-router"
import { browserHistory, RouterContext, match } from "react-router"
import { fromJS } from "immutable"
import { Provider } from "react-redux"
import { createStore, combineReducers, applyMiddleware }  from "redux"
import assign from "object-assign"
import ItemReducer from "./reducers/ItemReducer"
import promiseMiddleware from "./lib/promiseMiddleware"
import fetchComponentData from "./lib/fetchComponentData"

import routes from "./routes"

const initialState = window.__INITIAL_STATE__

const reducer = combineReducers({
	items: ItemReducer
})

const store = applyMiddleware(promiseMiddleware)(createStore)(reducer, initialState)

browserHistory.listen(location => {
	console.groupCollapsed("browserHistory->listen()")
	console.dir(location)
	console.groupEnd()

	match({ routes, location }, (err, redirectLocation, renderProps) => {
		console.groupCollapsed("react-router->match()")
		console.dir(location)
		console.dir(renderProps)
		console.dir(initialState)
		console.groupEnd()

	    fetchComponentData(store.dispatch, renderProps.components, renderProps.params)
	    .then(() => {
	    	const initialState = store.getState()

			render(
				<Provider store={store}>
					<Router children={routes} history={browserHistory} />
				</Provider>,
				document.getElementById("root")
			)
	    })
	    .catch(err => console.error(err.message))
	})
})
