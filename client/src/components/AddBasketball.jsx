import React              from 'react';
import {navigate, Link}   from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import * as Config        from '../config.json'

class AddBasketball extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {
    title     : ''
  }

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (this.state.reportedError) {
      return (
        <div>
          <h1>Error</h1>
          <p>Sorry, there was an error creating the basketball. The error was: {this.state.reportedError || 'Unknown'}</p>
          <a href='#' onClick={this.resetForRetry.bind(this)}>Try again</a>&nbsp;|&nbsp;
          <Link to='/'>Back to All basketballs</Link>
        </div>
      );
    } else if (this.state.processingAdd) {
      return (
        <div>Adding basketball...</div>
      );
    } else {
      return (
        <div>
          <h1>Add a basketball</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>

            <div>
              <label>basketball Title:
                <input type='' value={this.state.title} onChange={this.handleTitleUpdate.bind(this)} />
              </label>
            </div>

            {/* <div>
              <label>basketball Content:
                <textarea value={this.state.content} onChange={this.handleContentUpdate.bind(this)}></textarea>
              </label>
            </div> */}

            <div>
              <input type='submit' value='Add Player' />
            </div>

          </form>
          <Link to='/'>Back to All Players</Link>
        </div>
      );
    }
  }

  handleTitleUpdate(e) {
    this.setState({title: e.target.value || null});
  }

  handleContentUpdate(e) {
    this.setState({content: e.target.value || null});
  }

  handleSubmit(e) {

    // Prevent the default form submit action
    e.preventDefault();

    // Perform a POST call for the new data
    fetch(urlToCurrentDomain(`${Config.basketballsAPI}`), {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        authoredBy: this.state.authoredBy,
        title     : this.state.title,
        content   : this.state.content
      })}
    )
      .then (res  => {
        if (res.status >= 400) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then (json => navigate(`/basketball/${json._id}`))
      .catch(err => {
        this.setState({reportedError: err.message || 'Unknown'});
      })

  }

  resetForRetry() {
    this.setState({reportedError: null});
  }

  componentDidMount() {
    // this.getComments(this.props.basketballID);
  }

}

export default AddBasketball;
