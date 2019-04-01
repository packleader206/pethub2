import React, { Component } from 'react'
import axios from 'axios'

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			firstname: '',
			lastname: '',
			email: '',
			password: '',
			imageURL: '',
			date: ''

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()

		//request to server to add a new user
		axios.post('/user/', {
			username: this.state.username,
			firstname: this.state.firstname,
			lastname: this.state.lastname,
			email: this.state.email,
			password: this.state.password,
			imageURL: this.state.imageURL,
			date: this.state.date
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}


render() {
	return (
		<div className="SignupForm">
			<h4>Sign up</h4>
			<form className="form-horizontal">
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="username">Username: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							type="text"
							id="username"
							name="username"
							placeholder="Enter your Pet's Name or Select a Username"
							value={this.state.username}
							onChange={this.handleChange}
						/>
					</div>
				</div>

				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="firstname">First Name: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							type="text"
							id="firstname"
							name="firstname"
							placeholder="Owner's First Name"
							value={this.state.firstname}
							onChange={this.handleChange}
						/>
					</div>
				</div>

				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="lastname">Last Name: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							type="text"
							id="lastname"
							name="lastname"
							placeholder="Owner's Last Name"
							value={this.state.lastname}
							onChange={this.handleChange}
						/>
					</div>
				</div>

				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="email">Email: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							type="text"
							id="email"
							name="email"
							placeholder="Email Address"
							value={this.state.email}
							onChange={this.handleChange}
						/>
					</div>
				</div>

				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="password">Password: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							placeholder="Password"
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
					</div>
				</div>

				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="imageURL">Photo: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							type="text"
							id="imageURL"
							name="imageURL"
							placeholder="Enter a URL for your Pet's photo"
							value={this.state.imageURL}
							onChange={this.handleChange}
						/>
					</div>
				</div>

				<div className="form-group ">
					<div className="col-7"></div>
					<button
						className="btn btn-primary col-1 col-mr-auto"
						onClick={this.handleSubmit}
						type="submit"
					>Sign up</button>
				</div>
			</form>
		</div>

	)
}
}

export default Signup
