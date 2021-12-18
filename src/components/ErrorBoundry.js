/* [ErrorBoundry Implementation- to 'Catch & Throw' Errors, like .js 'Try & Catch' Block: 
	In 3 Files {ErrorBoundry.js, CardList.js & App.js}] 
import React, { Component } from 'react';
import { render } from 'react-dom';

class ErrorBoundry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(error, info) {
		this.setState({ hasError: true })
	}

	render() {
		if (this.state.hasError) {
			return <h1>Oooops. That is not good.</h1>
		}
		return this.props.children
	}
}

export default ErrorBoundry; */