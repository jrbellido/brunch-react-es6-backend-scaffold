import React, { PropTypes } from "react"

if (typeof window !== 'undefined')
	require("../styles/footer.scss")

export default class Footer extends React.Component {
	render() {
		return <div className='page-footer'>
          webpack-react-es6-backend-scaffold
        </div>
	}
}
