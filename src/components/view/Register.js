import React, { Component } from 'react';

class Register extends Component {
	constructor() {
		super();

		this.state = {
			registration: {
				username: '',
				password: ''
			}
		}
	}

	updateRegistration(e) {
		let updated = Object.assign({}, this.state.registration);

		updated[e.target.id] = e.target.value;

		this.setState({
			registration: updated
		})
	}

	submitRegistration(e) {
		e.preventDefault();

		let registration = this.state.registration;

		if (registration.username.length == 0) {
			alert('Please enter a username');
			return;
		}

		if (registration.password.length == 0) {
			alert('Please enter a password');
			return;
		}

		this.props.onRegister(this.state.registration);
	}

	render() {
		return (
			<div>
				<h2>Sign up</h2>
				<input onChange={this.updateRegistration.bind(this)} id="username" type="text" placeholder="Username" /><br />
				<input onChange={this.updateRegistration.bind(this)} id="password" type="password" placeholder="Password" /><br />
				<button onClick={this.submitRegistration.bind(this)}>Join</button>
			</div>
		)
	}
}


export default Register;