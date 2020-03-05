import React              from 'react';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import {Link}             from '@reach/router';
import * as Config        from '../config2.json'

class Allstars extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {}

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (!this.state.allstars && this.state.allstarsLoaded === true) {
      return (
        <p>Error loading Players. Try again later.</p>
      );
    } else if (!this.state.allstars) {
      return (
        <p>Loading players...</p>
      );
    } else if (this.state.allstars.length === 0) {
      return (
        <p>Sorry, no players are available</p>
      );
    } else {
      return (
        <div>
          <h1>All Players in the database</h1>
          <ul>
            {this.state.allstars.map(allstar => (
              <li key={`allstar_${allstar._id}`}><Link to={`/allstar/${allstar._id}`}>{allstar.name}{allstar.appearances}</Link></li>
            ))}
          </ul>
          <p><Link to='/add-allstar'>Add a new Player</Link></p>
        </div>
      )
    }
  }

  componentDidMount() {
    fetch(urlToCurrentDomain(Config.allstarsAPI))
      .then (res  => res.json())
      .then (json => {
        this.setState({allstars       : json});
        this.setState({allstarsLoaded : true});
      })sx  
      .catch(err => {
        this.setState({allstarsLoaded: true});
      });
  }

}

export default Allstars;

