import React, { Component } from 'react';
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
// components
import Signup from './components/sign-up'
import LoginForm from './components/login-form'
import Navbar from './components/navbar'
import Home from './components/home'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  // getArticles() {
  //   axios.get("https://www.nytimes.com/topic/subject/pets").then(function (response) {
  //     // Load that into cheerio and save it to $ for a shorthand selector
  //     var $ = cheerio.load(response.data);
  //     var results = [];
  //     // Grab sepecified elements that we want for each article
  //     $(".story-body").each(function (i, element) {
  //           // Save an empty result object
  //           var result = {};
  
  //           // Specifies the data that we want to extract
  //           //Save the title of each article from the site to the result object as result.title
  //           result.title = $(this).find(".headline").text();
            
  //           //Save the summary of each article from the site to the result object as result.summary
  //           result.summary = $(this).find(".summary").text();

  //           //Save the link of each article from the site to the result object as result.link
  //           result.link = "http://www.nytimes.com" + $(this).find("a").attr("href");

  //           //Save the image URL of each article from the site to the result object as result.image
  //           result.img = $(this).find(".wide-thumb").find("img").attr("src");

  //           console.log(result);
  //           console.log("result: " + result.title);
  //           results.push(result);

  //           // Conditional to check for undefined links.
  //           // Only add articles to the DB that have a valid link and the extended path starts with "/mma"
  //           if ($(this).find("a").attr("href") !== undefined && $(this).find("a").attr("href").startsWith("/mma")) {
  //           // Create a new Article using the `result` object built from scraping
  //               db.Article.create(result)
                
  //               .then(function (dbArticle) {
  //                   // View the added result in the console
  //                   console.log("database " + dbArticle)
  //                   results.push(dbArticle);
  //                   console.log(results);
  //               })
  //               .catch(function (err) {
  //                   // If error, send to client
  //                   return res.json(err);
  //               });
  //           }
  //       });
  //       res.json(result);
  //   });
  // }


  render() {
    return (
      <div className="App">
   
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* greet user if logged in: */}
        {/* {this.state.loggedIn &&
          <p>You are currently logged in, {this.state.username}!</p>
        } */}
        {/* Routes to different components */}
        <Route
          exact path="/"
          component={Home} />
        <Route
          path="/login"
          render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}
        />
        <Route
          path="/signup"
          render={() =>
            <Signup/>}
        />
        {/* <Route
          path="/myprofile"
          render={() =>
            <MyProfile/>}
        /> */}
        {/* <Route
          path="/adoptions"
          render={() =>
            <Adoptions/>}
        />
        <Route
          path="/breeds"
          render={() =>
            <Breeds/>}
        />
        <Route
          path="/shelters"
          render={() =>
            <Shelters/>}
        /> */}


      </div>
    );
  }
}

export default App;
