import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import logo from '../logo.svg';
import '../App.css';
import axios from 'axios'

class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })
          }
        }).catch(error => {
            console.log('Logout error')
        })
      }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);
        
        return (
            <div className="container" id="navbarWrapper">
                <header className="navbar App-header" id="nav-container">
                    <div className="col-4" >
                        {loggedIn ? (
                            <section className="navbar-section">
                                <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                                <span className="text-secondary">Logout</span><br></br>(you are currently logged in)
                                </Link>
                                <Link to="/myprofile" className="btn btn-link text-secondary">
                                <span className="text-secondary">My Profile</span>
                                </Link>
                                
                            </section>
                        ) : (
                                <section className="navbar-section">
                                    <Link to="/" className="btn btn-link text-secondary">
                                        <span className="text-secondary">Home</span>
                                    </Link>
                                    <Link to="/login" className="btn btn-link text-secondary">
                                        <span className="text-secondary">Login</span>
				                    </Link>
                                    <Link to="/signup" className="btn btn-link">
                                        <span className="text-secondary">Sign Up</span>
				                    </Link>
                                </section>
                            )}
                    </div>
                    <div className="col-4 col-mr-auto">
                    <div id="top-filler"></div>
                        <img src="logo3.png" className="App-logo" alt="logo" />
                        {/* <h1 className="App-title">Pethub</h1> */}
                    </div>
                    <div className="col-4 nav navbar-nav navbar-right" id="navmenu2">
                        <section className="navbar-section" id="navemenutest">
                            <Link to="/adoptions" className="btn btn-link text-secondary">
                                <span className="text-secondary">Adoptions</span>
                            </Link>
                            <Link to="/breeds" className="btn btn-link text-secondary">
                                <span className="text-secondary">Breeds</span>
                            </Link>
                            <Link to="/shelters" className="btn btn-link">
                                <span className="text-secondary">Shelters</span>
                            </Link>
                        </section>

                    </div>
                </header>
            </div>

        );

    }
}

export default Navbar