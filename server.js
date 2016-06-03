import express from "express"
import React from "react"
import Router from "react-router"

const app = express()

app.set('views', './templates')
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get("/*", (req, res) => {
	Router.run(routes, req.url, Handler => {
		let content = React.renderToString(<Handler />)
		res.render('index', { content: content })
	})
})

const server = app.listen(3000, () => {  
  var host = server.address().address
  var port = server.address().port

  console.log(`Example app listening at http://${host}:${port}`)
})
