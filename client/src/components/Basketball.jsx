import React              from 'react';
import {Link}             from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import * as Config        from '../config.json'

class Basketball extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {}

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (!this.state.basketball && this.state.basketballLoaded === true) {
      return (
        <p>Error loading Players. Try again later.</p>
      );
    } else if (!this.state.basketball) {
      return (
        <p>Loading Playerss...</p>
      );
    } else if (this.state.basketball.length === 0) {
      return (
        <p>Sorry, no Players are available</p>
      );
    } else {
      return (
        <div>
          <h1>{this.state.basketball.title}</h1>
          <Link to='/'>Back to All Players</Link>
        </div>
      )
    }
  }

  componentDidMount() {
    fetch(urlToCurrentDomain(`${Config.basketballsAPI}/${this.props.basketballID}`))
      .then (res  => res.json())
      .then (json => {
        this.setState({basketball       : json});
        this.setState({basketballLoaded : true});
      })
      .catch(err => {
        this.setState({basketballLoaded: true});
      });
  }

}

export default Basketball;
