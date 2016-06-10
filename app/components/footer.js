import React, { PropTypes, Component } from "react"

if (typeof window !== 'undefined')
	require("../styles/footer.scss")

export default class Footer extends Component {
	render() {
		return <div className='page-footer'>
          webpack-react-es6-backend-scaffold
        </div>
	}
}
