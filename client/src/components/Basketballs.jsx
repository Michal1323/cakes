import React              from 'react';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import {Link}             from '@reach/router';
import * as Config        from '../config.json'

class Basketballs extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {}

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (!this.state.basketballs && this.state.basketballsLoaded === true) {
      return (
        <p>Error loading basketballs. Try again later.</p>
      );
    } else if (!this.state.basketballs) {
      return (
        <p>Loading basketballs...</p>
      );
    } else if (this.state.basketballs.length === 0) {
      return (
        <p>Sorry, no basketballs are available</p>
      );
    } else {
      return (
        <div>
          <h1>All Basketballs in the database</h1>
          <ul>
            {this.state.basketballs.map(basketball => (
              <li key={`basketball_${basketball._id}`}><Link to={`/basketball/${basketball._id}`}>{basketball.title}</Link></li>
            ))}
          </ul>
          <p><Link to='/add-basketball'>Add a new Basketball</Link></p>
        </div>
      )
    }
  }

  componentDidMount() {
    fetch(urlToCurrentDomain(Config.basketballsAPI))
      .then (res  => res.json())
      .then (json => {
        this.setState({basketballs       : json});
        this.setState({basketballsLoaded : true});
      })
      .catch(err => {
        this.setState({basketballsLoaded: true});
      });
  }

}

export default Basketballs;

