import React from 'react';

/**
 * Component for displaying a Error Boundary
 *
 * @component
 */
class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: '',
		};
	}

	componentDidCatch(error) {
		this.setState({
			error: error.message,
		});
	}

	render() {
		if (this.state.error) {
			return (
				<div>
					<h2>Oh-no! Algo salió mal</h2>
					<div>{'Detalles del error del stack de componentes: '}</div>
					<p className="red">{this.state.error && this.state.error.toString()}</p>
				</div>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
