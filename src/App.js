import React, { Component } from 'react';
import logo from './retrobeer.png';
import './App.css';

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

          <img alt="Breweries" className="pure-img-responsive" src={logo} />
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
      // apiUrl:"http://localhost:8080/breweries",
      apiUrl: "https://murmuring-basin-65291.herokuapp.com/breweries?page=1&count=25",
    };
  }

  componentDidMount() {
    this.fetchBreweries();

  }

  /*
  fetchBreweries2(){
    axios.get(this.state.apiUrl, {crossDomain:true})
      
      .then(response => 
        this.setState({ 
          items: response.data, 
          isLoading: false 
        })
        )
      .catch(error => 
        this.setState({
          error, 
          isLoading:false
        })
      );
  }
  */


  fetchBreweries() {
    fetch(this.state.apiUrl)
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


  render() {

    const { isLoading, items, error } = this.state;
    return (
      <div className="content pure-u-1 pure-u-md-3-4">
        <div>
        <div class="content.subheader">
            <h1>Next Beer!</h1>
          </div>

          <div className="searchform">
            <form className="pure-form">
              <fieldset>
                <input type="text" className="pure-input-rounded" placeholder="search.." /> &nbsp;
                <button type="submit" className="pure-button pure-button-primary">Search</button>
              </fieldset>
            </form>
          </div>

         
          {error ? <p>{error.message}</p> : null}

          {/**********Table to Display ************/}
          <table class="pure-table pure-table-horizontal">
            <thead>
              <tr>
                <th>Name</th>
                <th>City</th>
                <th>State</th>
                <th>Phone</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              {items.map(brewery => {
                const { id, name, city, state, phone, websiteUrl } = brewery;
                return (

                  <tr>
                    <td>{name}</td>
                    <td>{city}</td>
                    <td>{state}</td>
                    <td>{phone}</td>
                    <td>{websiteUrl}</td>
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
            <li className="pure-menu-item"><a href="https://twitter.com/naveenhn/" className="pure-menu-link">Twitter</a></li>
            <li className="pure-menu-item"><a href="https://github.com/naveenhn/" className="pure-menu-link">GitHub</a></li>
            <li className="pure-menu-item"><a href="http://freedesignfile.com/" className="pure-menu-link"> Logo from freedesignfile</a></li>
          </ul>
        </div>
      </div>

    );
  }
}

export default App;
