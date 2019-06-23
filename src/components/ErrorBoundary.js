import React, {Component} from 'react';

class ErrorBundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

	//Built in function of React
	componentDidCatch(error, info) {
		this.setState({hasError: true});
	}

	//If there is error, print the message.
	//Otherwise display whatever is inside the ErrorBoundary
	render() {
		if(this.state.hasError) {
			return <h1>Oooops! Something went wrong</h1>
		}

		return this.props.children;
	}
}

export default ErrorBundary;