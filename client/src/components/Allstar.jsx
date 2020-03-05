import React              from 'react';
import {Link}             from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import * as Config        from '../config2.json'

class Allstar extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {}

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (!this.state.allstar && this.state.allstarLoaded === true) {
      return (
        <p>Error loading Players. Try again later.</p>
      );
    } else if (!this.state.allstar) {
      return (
        <p>Loading Playerss...</p>
      );
    } else if (this.state.allstar.length === 0) {
      return (
        <p>Sorry, no Players are available</p>
      );
    } else {
      return (
        <div>
          <h1>{this.state.Allstar.name}</h1>
         
          <Link to='/'>Back to All Players</Link>
        </div>
      )
    }
  }

  componentDidMount() {
    fetch(urlToCurrentDomain(`${Config.allstarsAPI}/${this.props.allstarID}`))
      .then (res  => res.json())
      .then (json => {
        this.setState({allstar       : json});
        this.setState({allstarLoaded : true});
      })
      .catch(err => {
        this.setState({allstarLoaded: true});
      });
  }

}

export default Allstar;
