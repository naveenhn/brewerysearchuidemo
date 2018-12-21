import React, { Component } from 'react';
import logo from './retrobeer.png';
import './App.css';


// const API_URL="http://localhost:8080/breweries",
const API_URL = "https://murmuring-basin-65291.herokuapp.com/breweries?page=1&count=15";
const API_SEARCH_URL = "https://murmuring-basin-65291.herokuapp.com/breweries/search?page=1&count=15&query=";
const DEFAULT_QUERY = "Phoenix";

class App extends Component {


  render() {
    return (


      <div id="layout" className="pure-g">

        <Sidebar />
        <Content />


      </div>
    );
  }
}

class Sidebar extends Component {

  render() {
    return (
      <div className="sidebar pure-u-1 pure-u-md-1-4">
        <div className="header">

          <img alt="Breweries" className="pure-img pure-img-responsive" src={logo} />
          <h2 className="brand-tagline">Brewery Search Demo </h2>

        </div>
      </div>
    );
  }
}

class Content extends Component {


  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      items: [],
      error: null,
      query: DEFAULT_QUERY

    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.fetchBreweries();

  }


  fetchBreweries() {
    fetch(API_URL)
      .then(response => response.json())
      .then(data =>
        this.setState({
          items: data,
          isLoading: false
        })
      )
      .catch(error =>
        this.setState({
          error,
          isLoading: false
        })
      );
  }

  handleInputChange(e) {
    this.setState({
      query: e.target.value
    });

  }

  

  handleSearch() {

    fetch(API_SEARCH_URL + this.state.query)
      .then(response => response.json())
      .then(data =>
        this.setState({
          items: data,
          isLoading: false
        })
      )
      .catch(error =>
        this.setState({
          error,
          isLoading: false
        })
      );

  }


  handleSubmit(e) {
     e.preventDefault();
     this.handleSearch();
  }


  render() {

    const { isLoading, items, error } = this.state;
    return (
      <div className="content pure-u-1 pure-u-md-3-4">
        <div class="content.subheader">
          <h4><em>"He was a wise man who invented Beer!"     -unknown</em></h4>
        </div>
        <div className="searchform">
          <form className="pure-form pure-form-aligned" onSubmit={this.handleSubmit}>
            <fieldset>
              <input type="text" className="pure-input-rounded" placeholder="search.." onChange={this.handleInputChange} /> &nbsp;
                <button type="button" className="pure-button pure-button-primary" onClick={this.handleSearch}>Search</button>
            </fieldset>
          </form>
        </div>


        {error ? <p>{error.message}</p> : null}

        {/**********Table to Display ************/}
        <div className="results">
          <table className="pure-table pure-table-horizontal">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Street</th>
                <th>City</th>
                <th>State</th>
                <th>Phone</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              {items.map(brewery => {
                let { name, breweryType,street, city, state, phone, websiteUrl } = brewery;
                return (

                  <tr>
                    <td>{name}</td>
                    <td>{breweryType}</td>
                    <td>{street}</td>
                    <td>{city}</td>
                    <td>{state}</td>
                    <td>{phone}</td>
                    <td><a href={websiteUrl} target="_blank" rel="noopener noreferrer">{websiteUrl}</a></td>
                  </tr>


                );

              })}
            </tbody>
          </table>

        </div>

        <Footer />

      </div>


    );
  }
}


class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="pure-menu pure-menu-horizontal">
          <ul>
            <li className="pure-menu-item"><a href="https://naveenhn.in/" className="pure-menu-link">About</a></li>
            <li className="pure-menu-item"><a href="https://github.com/naveenhn/brewerysearchuidemo" className="pure-menu-link">GitHub</a></li>
            <li className="pure-menu-item"><a href="http://freedesignfile.com/" className="pure-menu-link"> Logo from freedesignfile</a></li>
          </ul>
        </div>
      </div>

    );
  }
}

export default App;
