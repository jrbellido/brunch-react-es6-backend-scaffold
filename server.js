import fp from "path"

import express from "express"
import hbs from "express-hbs"
import React from "react"
import { renderToString } from "react-dom/server"
import { RouterContext, match } from "react-router"
import { createLocation } from "history/lib/LocationUtils"
import routes from './app/routes';

const app = express()

app.set('view engine', 'hbs')
app.set('views', fp.join(__dirname, 'templates'))
app.engine('hbs', hbs.express4({
  //partialsDir: fp.join(__dirname, 'templates', 'partials')
}))

app.use(express.static('public'))

app.use("/*", (req, res) => {
  const location = createLocation(req.originalUrl)

  match({ routes, location }, (err, redirectLocation, renderProps) => {

    if (err) { 
      console.error(err)
      return res.status(500).render('500')
    }
    
    if (!renderProps)
    	return res.status(404).render('404')
    
    const InitialComponent = (
      <RouterContext {...renderProps} />
    )

    const componentHTML = renderToString(InitialComponent)

    console.log(componentHTML)

    res.render('app', { content: componentHTML })
  })
})

export default app
