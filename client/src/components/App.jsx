import React    from 'react';
import {Router} from "@reach/router";
import Basketballs   from './Basketballs';
import Basketball    from './Basketball';
import AddBasketball from './AddBasketball';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Basketballs   path='/' />
        <Basketball    path='/basketball/:basketballID' />
        <AddBasketball path='/add-basketball/' />
      </Router>
    );
  }

}

export default App;
