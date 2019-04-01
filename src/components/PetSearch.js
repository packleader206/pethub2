import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

let searchResults = []

class PetSearch extends Component {
    constructor() {
      super()
      this.state = {
        species: '',       // dog or cat
        sex: '',          // male or female
        breed: '',        // specific breed
        size: '',         // small, med, lrg or xlrg -- or perhaps weight instead?
        color: '',
        age: '',          // baby, young, adult, senior -- or perhaps age ranges
        activityLevel: '', // mellow, active, very active -- not sure on this.
        location: ''       // state
        // redirectTo: null
      }

      this.handleSearch = this.handleSearch.bind(this)
      // this.handleSubmit = this.handleSubmit.bind(this)
      // this.handleChange = this.handleChange.bind(this)
    }

    handleSearch(event) {
      event.preventDefault();
      console.log('handleSearch')

      const url = 'https://www.API.com/key'
      

      axios
          .get(url, {
            species: this.state.species,
            sex: this.state.sex,
            breed: this.state.breed,
            size: this.state.size,
            color: this.state.color,
            age: this.state.age,
            activityLevel: this.state.activityLevel,
            location: this.state.location
          })
          .then(response => {
            console.log('API search data response: ')
            console.log(response)
            searchResults.push(response)
          })
    }


render() {
	return (
		<div className="petSearchForm">
			<h4>Search Adoptable Pets!</h4>
			<form className="form-horizontal">

				<div className="form-group">
          <div>
            <label className="form-label" htmlFor="species">Species: </label>
            <select className="form-control" id="speciesForm">
                      <option>Dog</option>
                      <option>Cat</option>
            </select>
          </div>
				</div>
<br></br>
        <div className="form-group">
          <div>
            <label className="form-label" htmlFor="sex">Sex: </label>
            <select className="form-control" id="sexForm">
                      <option>Male</option>
                      <option>Female</option>
            </select>
          </div>
				</div>
<br></br>

				<div className="form-group">
          <div>
            <label className="form-label" htmlFor="breed">Breed: </label>
            <select className="form-control" id="breedForm">
                      <option>Labrador Retriever</option>
                      <option>German Shepard</option>
            </select>
          </div>
				</div>
<br></br>
				<div className="form-group">
          <div>
            <label className="form-label" htmlFor="size">Size: </label>
            <select className="form-control" id="sizeForm">
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                      <option>X-Large</option>
            </select>
          </div>
				</div>
<br></br>
				<div className="form-group">
          <div>
            <label className="form-label" htmlFor="color">Color: </label>
            <select className="form-control" id="colorForm">
                      <option>White</option>
                      <option>Yellow</option>
                      <option>Brown</option>
                      <option>Black</option>
                      <option>Multi</option>
            </select>
          </div>
				</div>
<br></br>
				<div className="form-group">
          <div>
            <label className="form-label" htmlFor="age">Age: </label>
            <select className="form-control" id="ageForm">
                      <option>Under 6 months</option>
                      <option>6 months - 1 yr</option>
                      <option>1-2 yrs</option>
                      <option>2-5 yrs</option>
                      <option>5-8 yrs</option>
                      <option>over 8 yrs</option>
            </select>
          </div>
				</div>
<br></br>
				<div className="form-group">
          <div>
            <label className="form-label" htmlFor="activityLevel">Activity Level: </label>
            <select className="form-control" id="activityLevelForm">
                      <option>Very Mellow</option>
                      <option>Somewhat Mellow</option>
                      <option>Somewhat Active</option>
                      <option>Very Active</option>
            </select>
          </div>
				</div>
<br></br>
        <div className="form-group">
          <div>
            <label className="form-label" htmlFor="location">Location: </label>
            <select className="form-control" id="locationForm">
                      <option>Washington</option>
                      <option>Oregon</option>
                      <option>Idaho</option>
                      <option>California</option>
                      <option>Arizona</option>
                      <option>Colorado</option>
            </select>
          </div>
				</div>
        <button type="btn" className="btn btn-primary" id="searchBtn">Search</button>
			</form>
		</div>

	)}
}; 

export default PetSearch



